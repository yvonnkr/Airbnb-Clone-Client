import {Component, inject, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";
import {CategoryComponent} from "./category/category.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {DialogService} from "primeng/dynamicdialog";
import {MenuItem} from "primeng/api";
import {ToastService} from "../toast.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  toastService: ToastService = inject(ToastService);
  location = "Anywhere";
  guests = "Add guests";
  dates = "Any week";

  currentMenuItems: MenuItem[] | undefined = [];

  //todo
  // login = () => this.authService.login();
  // logout = () => this.authService.logout();


  ngOnInit(): void {
    this.fetchMenu();
    this.toastService.send({severity: 'info', summary: 'Welcome to airbnb App'});
  }

  private fetchMenu() {
    return [
      {
        label: "Sign up",
        styleClass: "font-bold",
      },
      {
        label: "Log in",
      },
    ]
  }
}
