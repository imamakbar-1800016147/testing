import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private firebase: AngularFireDatabase) { }
  listMahasiswa: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    namaMahasiswa: new FormControl('', Validators.required),
    nim: new FormControl(''),
    programstudi: new FormControl(''),
    tahunangkatan: new FormControl(''),
    universitasmahasiswa: new FormControl('')
  });

  getMahasiswa() {
    this.listMahasiswa = this.firebase.list('mahasiswa');
    return this.listMahasiswa.snapshotChanges();
  }

  insertMahasiswa(mahasiswa) {
    this.listMahasiswa.push({
      namaMahasiswa: mahasiswa.namaMahasiswa,
      nim: mahasiswa.nim,
     programstudi: mahasiswa.programstudi,
      tahunangkatan: mahasiswa.tahunangkatan,
      universitasmahasiswa: mahasiswa.universitasmahasiswa
    });
  }

  updateMahasiswa(mahasiswa) {
    this.listMahasiswa.update(mahasiswa.$key,
      {
         namaMahasiswa: mahasiswa.namaMahasiswa,
      nim: mahasiswa.nim,
     programstudi: mahasiswa.programstudi,
      tahunangkatan: mahasiswa.tahunangkatan,
      universitasmahasiswa: mahasiswa.universitasmahasiswa
      });
  }

  deleteMahasiswa($key: string) {
    this.listMahasiswa.remove($key);
  }

  populateForm(mahasiswa) {
    this.form.setValue(mahasiswa);
  }
}