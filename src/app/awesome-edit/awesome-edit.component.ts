import { Component, OnInit } from '@angular/core';
import {Awesome} from "../Awesome";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AwesomeService} from "../awesome.service";

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.css']
})
export class AwesomeEditComponent implements OnInit {
  awesome: Awesome;
  awesomes: Awesome[];
  editForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private awesomeService: AwesomeService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.awesomeService.getAwesomeById(id).subscribe(
      next => {
        this.awesome = next;
        this.editForm.patchValue(this.awesome);
      },
      error => {
        console.log(error);
        this.awesome = null;
      }
    );
  }

  onSubmit() {
    if (this.editForm.valid) {
      const { value } = this.editForm;
      const data = {
        ...this.awesome,
        ...value
      };
      this.awesomeService.updateAwesome(data).subscribe(
        next => {
          this.router.navigate(['awesome-list']);
        },
        error => console.log(error)
      );
    }
  }

  deleteAwesome(awesome) {
    this.awesomeService.deleteAwesome(awesome.id).subscribe(() => {
      this.router.navigate(['awesome-list'])
    });
  }
}
