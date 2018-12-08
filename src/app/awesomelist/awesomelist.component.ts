import { Component, OnInit } from '@angular/core';
import {Awesome} from "../Awesome";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AwesomeService} from "../awesome.service";

@Component({
  selector: 'app-awesomelist',
  templateUrl: './awesomelist.component.html',
  styleUrls: ['./awesomelist.component.css']
})
export class AwesomelistComponent implements OnInit {

  awesomes: Awesome[];
  awesomeForm: FormGroup;

  constructor(private awesomeService: AwesomeService, private formBuilder: FormBuilder) {
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


  deleteAwesome(i) {
    const awesome = this.awesomes[i];
    this.awesomeService.deleteAwesome(awesome.id).subscribe(() => {
      this.awesomes = this.awesomes.filter(t => t.id !== awesome.id);
    });
  }


}
