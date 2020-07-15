import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
@Component({
  selector: 'app-list-mahasiswa',
  templateUrl: './list-mahasiswa.component.html',
  styleUrls: ['./list-mahasiswa.component.css']
})
export class ListMahasiswaComponent implements OnInit {

 constructor(private studentsService: StudentsService) { }

  mahasiswaArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.studentsService.getMahasiswa().subscribe(
      list => {
        this.mahasiswaArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        });
      }
    );
  }

  onDelete($key) {
    if (confirm('Apakah anda yakin ingin menghapus data ini ?')) {
      this.studentsService.deleteMahasiswa($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(mahasiswa) {
    return mahasiswa.namaMahasiswa.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}