import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrls: ['./post.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PostComponent {}
