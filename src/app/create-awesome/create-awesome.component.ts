import { Component, OnInit } from '@angular/core';
import {Awesome} from "../Awesome";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AwesomeService} from "../awesome.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-awesome',
  templateUrl: './create-awesome.component.html',
  styleUrls: ['./create-awesome.component.css']
})
export class CreateAwesomeComponent implements OnInit {

  awesomes: Awesome[];
  awesomeForm: FormGroup;

  constructor(private awesomeService: AwesomeService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.awesomeForm = this.formBuilder.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    });
    this.awesomeService
      .getAwesomes()
      .subscribe(next => (this.awesomes = next), error => (this.awesomes = []));
  }

  addAwesome() {
    if (this.awesomeForm.valid) {
      const {value} = this.awesomeForm;
      this.awesomeService.addAwesome(value)
        .subscribe(next => {
          this.awesomes.unshift(next);
          this.router.navigate(['awesome-list'])
          this.awesomeForm.reset({
            tag: '',
            url: '',
            descriptions: ''
          });
        }, error => console.log(error));
    }
  }

}
