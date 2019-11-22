import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IEndpoint } from '../models/interfaces/endpoint';
@Injectable()
export class FirebaseService {
    constructor(private firestore: AngularFirestore) { }
    COLLECTION_NAME = 'endpoints';

    addEndpoint(endpoint: IEndpoint) {
        return this.firestore.collection(this.COLLECTION_NAME).add(endpoint)
    }

    getEndpoints(): Promise<IEndpoint[]> {
        return new Promise<IEndpoint[]>((resolve, reject) => {
            this.firestore.collection(this.COLLECTION_NAME).snapshotChanges().subscribe(
                data => {
                    let documents:IEndpoint[]=[];
                    data.forEach(item=>{
                        documents.push(item.payload.doc.data() as IEndpoint);
                    })
                    resolve(documents);
                },
                error => {
                    reject(error);
                }
            );
        });
    }

    getEndpoint(id:string):Promise<any>{
        return new Promise<any>((resolve,reject)=>{
            this.firestore.collection(this.COLLECTION_NAME).doc(id).ref.get().then(function(doc){
                if(doc.exists){
                    resolve(doc.data())
                }else{
                    resolve({})
                }
            }).catch(error=>{
                reject(error);
            });
        });
    }

    updateEndpoint(id:string, newDoc:any){
        return this.firestore.collection(this.COLLECTION_NAME).doc(id).set(newDoc)
    }

    deleteEndpoint(id:string){
        return this.firestore.collection(this.COLLECTION_NAME).doc(id).delete();
    }
}