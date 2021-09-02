import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public menuList: Array<UserMenu>;

  constructor(private router: Router) {
    this.menuList = this.menuManager();
  }
  ngOnInit(): void {}

  private menuManager(): Array<UserMenu> {
    let useMenuList: Array<UserMenu> = new Array<UserMenu>();
    useMenuList.push(new UserMenu(0, 'Sell', 1, 'Y', '', 0));

    useMenuList.push(new UserMenu(1, 'Items', 1, 'Y', '', 0));
    useMenuList.push(new UserMenu(11, 'Add Item', 1, 'Y', '', 1));
    useMenuList.push(new UserMenu(12, 'Remove Item', 1, 'Y', '', 1));
    useMenuList.push(new UserMenu(13, 'Item Details', 1, 'Y', '', 1));

    useMenuList.push(new UserMenu(2, 'Order', 1, 'Y', '', 0));
    useMenuList.push(new UserMenu(21, 'New Order', 1, 'Y', '', 2));
    useMenuList.push(new UserMenu(22, 'Manage Order', 1, 'Y', '', 2));
    useMenuList.push(new UserMenu(23, 'Order Details', 1, 'Y', '', 2));

    return useMenuList;
  }

  navigationPage(routerLink: string) {
    this.router.navigate([routerLink]);
  }

  logout() {
    //this.authenticationService.logout();
    this.router.navigate(['radio/active']);
  }
}

export class UserMenu {
  id: number;
  menuName: string;
  menuLevel: number;
  menuStatus: string;
  menuUrl: string;
  parentMenu: number;
  constructor(
    id: number,
    menuName: string,
    menuLevel: number,
    menuStatus: string,
    menuUrl: string,
    parentMenu: number
  ) {
    this.id = id;
    this.menuName = menuName;
    this.menuLevel = menuLevel;
    this.menuStatus = menuStatus;
    this.menuUrl = menuUrl;
    this.parentMenu = parentMenu;
  }
}
