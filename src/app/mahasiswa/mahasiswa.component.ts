import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {

   constructor(private studentsService: StudentsService) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  showSuccessEdit: boolean;
  formControls = this.studentsService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.studentsService.form.valid) {
      if (this.studentsService.form.get('$key').value == null) {
        this.studentsService.insertMahasiswa(this.studentsService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      } else {
        this.studentsService.updateMahasiswa(this.studentsService.form.value);
        this.showSuccessEdit = true;
        setTimeout(() => this.showSuccessEdit = false, 3000);
      }
      this.submitted = false;
      this.studentsService.form.reset();
    }
  }
}