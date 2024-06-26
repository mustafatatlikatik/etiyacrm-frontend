import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import "@fontsource/inter/600.css";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, MainLayoutComponent, RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit{
  ngOnInit() {
    console.log("header")
  }
}
