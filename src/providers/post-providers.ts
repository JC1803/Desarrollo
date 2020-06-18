import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class PostProvider {
	

	
	// if you test in real device "http://localhost" change use the your IP	
    // server: string = "http://192.199.122.100/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; 
	
	//variable Global para guardar las tareas personales
	public Globaltpersonal: any[];

   //arreglo global para guardar los datos del usuario logeado
   public Globalusuario: any[];

   //arreglo global para guardar los de un usuario de contactos

   public Gusuarioc: any[];

    //arreglo global para guardar las subtareas
	public Gsubta: any[];


	//Arreglo global para guardar las tareas laborales del responsable
	public Gresta: any[];
	public Gresta1: any [];
	

	//variable para activar o desactivar boton de tareas laborales

	public Gbutunt: boolean;
	public Gtipouser: string;


	//variables para ver la asistencia y el motivo de de inasistencia y tipo de usuario


	public Gmotivo: string;
	public Gasistencia: string;
	public Gtipo: string;
	public Gbutunt1: boolean;

	
   //variable para dashboard 

   public Gdash: string;


   //variable global para el intervalo de notificacion y grafico respectivamente

   public intervalo: any;
   public intervalo2: any;


//variable global para comentarios

public comentary: any;


	//Headers


	//VARIABLES PARA ALAMCENAR DATOS OBTENIDOS DE LAS API Y SER USADAS EN CUALQUIER LADO
	//ALMACENA LA LISTA DEL USUARIO LOGUEADO
	private listSource = new BehaviorSubject<any[]>([]);
	$getListSource =  this.listSource.asObservable();
    //ALMACENA  LA LISTA DE TAREAS 
	private listTarea = new BehaviorSubject<any[]>([]);
	$getLisTarea =  this.listTarea.asObservable();
	//(no la uso aun)
	private listComen = new BehaviorSubject<any[]>([]);
	$getLisComen =  this.listComen.asObservable();

	//ALMACENAR LOS DATOS DE REUNIONES
	private listReunion = new BehaviorSubject<any[]>([]);
	$getListReunion =  this.listReunion.asObservable();

	//ALAMCENA LAS NOTIFICACIONES
	private listNoti = new BehaviorSubject<any[]>([]);
	$getListNoti =  this.listNoti.asObservable();



	constructor(public http : Http,
		public http1: HttpClient
		) {}
		server: string = "http://localhost/login/serverionic/"; // default
		url: string = "http://3.12.196.80/";
		//url: string = "http://localhost:8000/";
		
	    url1: string = "Usuarios";
		private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		private _params = new HttpParams();
		

	/////////////////////////////////APIS/////////////////////////////////////

	///////////////////////////GESTION USUARIOS/////////////////////////

	//FUNCION PARA EXTARER TODOS LOS USUARIOS
	getUsers() { 
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
		return this.http.get(`${this.url}Usuarios`, options);

	};

	//FUNCION PARA ACTUALIZAR LOS DATOS DE UN USUARIO
	modUser(body, id) {
		console.log(body);
		console.log(id);
		let  params= new HttpParams().set(id,id);
		return this.http.put(`${this.url}Usuarios/`+id, body);
		
		
	};
    //FUNCION PARA BUSCAR UN USUARIO POR ID

     buscarUsers(id) { 
	  return this.http.get(`${this.url}Usuarios/`+id).map(res => res.json());

      };

    //FUNCION PARA ELIMINAR UN USUARIO
	  deleteUsers(id){
		return this.http.delete(`${this.url}Usuarios`);
	  }

    //FUNCION PARA INGRESAR DATOS DE UN USUARIO
	 postUser(body){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
         
		return this.http.post(`${this.url}Usuarios`,body).map(res => res.json());
	  };
 
    //FUNCION PARA LOGIN DE UN USUARIO
	  postLogin(body){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
        
		//return this.http.post(`${this.url}Login`,body).map(res => res.json());
		return this.http1.post<any[]>(`${this.url}Login`,body, {headers:this._headers}); 
	  };

    //FUNCION PARA EXTARER TODOS LOS USUARIOS (PRUEBA)
	postData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
		.map(res => res.json());
	}

    //FUNCION PARA ALMACENAR DATOS DEL USUARIO LOGEADO
	//paso de datos
	sendListSource(list:any[]){
      this.listSource.next(list);
	}
 x
    // GUARDAR DATOS DEL REGISTRO EN LA TABLA USUARIOS-ROLES
    postUsuariosRoles (body){
	 return this.http.post(`${this.url}UsuariosRoles`,body).map(res => res.json());
     }

 ////////////////////////////////AREAS///////////////////////////////////////

    //FUNCIÓN PARA EXTRAER AREAS
    getArea() {
		return this.http1.get<any[]>(`${this.url}Area`);
	};


    //FUNCIÓN PARA EXTRAER SUBAREAS DEPENDIENDO DEL AREA
    getSubareas(idar) {
	 return this.http1.get<any[]>(`${this.url}SubAreaPorArea/`+ idar);

    };

    //FUNCION PARA EXTRAER ROLES DEPENDIENDO DEL SUBAREA
    getRoles(idsub) {
     return this.http1.get<any[]>(`${this.url}RolesPorSubArea/`+ idsub);
	  //esta funcion me extrae los roles dependiendo del area	 
	  //return this.http.get('http://localhost:8000/RolesArId/'+ idar);
	};
	
//////////////////////////////////////////////////////////////////////////////////
    //Funcion para extraer areas, subareas, roles y usuarios
	
	getAreaSub (){
	 return this.http1.get<any[]>(`${this.url}Organigrama`);
    }

/////////////////////////////////////TAREAS TRABAJO//////////////////////////////////////
 
    // FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (RESPONSABLE)
    getTareasRes(iduser) {
	  //console.log(iduser);
	  return this.http1.get<any[]>(`${this.url}MisTareasResponsables/`+iduser);

	};
	
	// FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (OBSERVADOR)
    getTareasObser(iduser) {
	  console.log(iduser);	 
	  return this.http1.get<any[]>(`${this.url}MisTareasObservadores/`+iduser);

	};
	
	// FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (PARTICIPANTES)
    getTareasPart(iduser) {
	  console.log(iduser); 
	  return this.http1.get<any[]>(`${this.url}MisTareasParticipantes/`+iduser);
	};
	// FUNCION PARA EXTRAER TAREAS POR USUARIO LOGEADO (CREADAS POR MI)
    getTareasCreaP(estado,iduser) {
	 //console.log(iduser);	 
	 return this.http1.get<any[]>(`${this.url}TareasEstado/`+estado+'/'+iduser);

    };

    //funcion para buscar tareas con ID
    buscarTareas(id){
      console.log(id);
      return this.http1.get<any[]>(`${this.url}Tareas/`+ id);
	}
	


	getTareastraesta(estado, tipot, user){
		return this.http1.get<any[]>(`${this.url}TareasPorTipo/`+estado +'/'+tipot+'/'+user);

	  }

    //Almacenar las tareas buscadas
     sendListTarea(list:any[]){
	   this.listTarea.next(list);
	}
//////////////////////////////////////////////Actualizar Tareas/////////////////////////////////

postTarea(body, id) {

	return this.http1.put<any[]>(`${this.url}Tareas/`+id, body);	
};


	
 /////////////////////////////////////////////TAREAS PERSONALES////////////////////////////////
 
    //FUNCION PARA EXTRAER TAREAS PERSONALES

    getTareasP(iduser) { 
	  return this.http1.get<any[]>(`${this.url}TareasPersonales/`+ iduser,{headers:this._headers});
	};
	
	//FUNCION PARA CREAR UNA TAREA PERSONAL

	postTareasP(body) { 
		return this.http1.post<Object>(`${this.url}Tareas`, body, {headers:this._headers});
	  };


	  //Funcion para guardar responsable de tareas personales
	  
	  postResTap(body) { 
		return this.http1.post<any[]>(`${this.url}Responsables`, body);
	  };



	  getTareaspesta(estado, tipot, user){
		return this.http1.get<any[]>(`${this.url}TareasPorTipoPendiente/`+estado +'/'+tipot+'/'+user);

	  }
	  ///////////////////////////////////////OBSERVACIONES////////////////////////////////////////////

//FUNCION PARA INGRESAR OBSERVACION

ingreObserv(body) { 
	return this.http1.post<any[]>(`${this.url}Observaciones`, body);
  };

  //Almacenar las lista de comentarios (no la uso aun)

  sendListComen(list:any[]){
	this.listComen.next(list);
  }

// Buscar las observaciones por tareas
  buscarObser(idt){
    return this.http1.get<any[]>(`${this.url}Observaciones/`+idt);
  }


  //////////////////////////////////////////////Documentos/////////////////////////////////////////////
  
 //Funcion para extraer los documentos de un usuario
  buscarDoc(iduser){
    return this.http1.get<any[]>(`${this.url}DocPorUsuarios/`+iduser);
  }



  /////////////////////////////////////////////REUNION/////////////////////////////////////////////////

  //Extraer las reunioes del usuario (creadas)

  getReunionEstado(iduser, estado){
    return this.http1.get<any[]>(`${this.url}ReunionPorEstado_User/`+estado+ '/'+iduser);
  }
  

  //Enviar la lista de reunion
  sendListReunion(list:any[]){
	this.listReunion.next(list);
  }

  //Funcion para buscar Reunion 
  getReunion(id){
	return this.http1.get<any[]>(`${this.url}Reunion/`+id);
  }

  //Extraer reuniones participantes
  getReuparti(id){
	return this.http1.get<any[]>(`${this.url}MisReunionesParticipantes/`+id);
  }

  //Extraer reuniones responsable
  getReurespon(id){
	return this.http1.get<any[]>(`${this.url}MisReunionesResponsables/`+id);
  }
  ///////////////////////////////////////////////OBSERVACION REUNION//////////////////////////////////////
  
 //Funcion para buscar observaciones de reuniones
  buscarObsereu(idt){
    return this.http.get(`${this.url}ObservacionesReuniones/`+idt);
  }
//Funcion para ingresar observacion en reunion
  ingreObservr(body) { 
	return this.http.post(`${this.url}ObservacionesReuniones`, body);
  };



///////////////////////////////////////////////////ACEPTAR O RECHAZAR LA REUNION////////////////////////////

//Funcion para actualizar la asistencia


actualizarAsist(iduser, idreunion, body) { 
	return this.http1.put<any[]>(`${this.url}ActualizarAsistencia/`+iduser+ '/'+idreunion, body);
  };

  /////////////////////////////////////////DASBOARD///////////////////////////////////////////////////////

  //Funcion que trae el analisis para el dashboard
  getdasboard(iduser){
	return this.http1.get<any[]>(`${this.url}TotalTareasResponsables/`+iduser,{headers:this._headers});
  }


  //Funcion que trae la efectividad por meses y anio

  getEfectividadLaboral(iduser, anio, mes){
	return this.http1.get<any[]>(`${this.url}EfectividadPorMeses/`+iduser+ '/'+anio+ '/'+mes,{headers:this._headers});
  }

  //Funcion que trae la efectividad por meses y anio personales

  getEfectividadPersonal(iduser, anio, mes){
	return this.http1.get<any[]>(`${this.url}EfectividadPorMesesPersonales/`+iduser+ '/'+anio+ '/'+mes,{headers:this._headers});
  }

  //Funcion que trae el analisis de dashboard personal por meses y anio
  getdasboardLaboral(iduser, anio, mes){
	  
	return this.http1.get(`${this.url}TotalTareasResponsablesLaboral/`+iduser+ '/'+anio+ '/'+mes,{headers:this._headers});
  }

  //Funcion que trae el analisis de dashboard personal por meses y anio

  getdasboardPersonal(iduser, anio, mes){

	return this.http1.get(`${this.url}TotalTareasResponsablesPersonal/`+iduser+ '/'+anio+ '/'+mes);
  }


  ////////////////////////////////////////////Notificaciones///////////////////////////////////////////////////

  //Trae todas las notificaciones
  getNotificaciones (){
	return this.http1.get<any[]>(`${this.url}Notificaciones`,{headers:this._headers}); 
  }


  //Cuenta la cantidad de notificaciones que tiene el usuario
  contarNotificaciones (iduser){
	return this.http1.get<any[]>(`${this.url}ContarNotificacionMovil/`+iduser,{headers:this._headers}); 
  }


  //Actualiza el estado de vista o no de la notificacion
  updateNotificaciones (idnotifi, body){
	return this.http1.put<any[]>(`${this.url}Notificaciones/`+idnotifi, body); 
  }

  //Guardar lista de Notificaciones
  sendListNoti(list:any[]){
	this.listNoti.next(list);
  }

//ejemplo de api
ejemplo(id){
	let  urls: string = "https://jsonplaceholder.typicode.com/";
	return this.http1.get(`${urls}todos/`+id); 
}

}
