import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { CommonModule } from '@angular/common';
import { AdicionarPedidoComponent } from '../financeiro/componets/adicionar-pedido/adicionar-pedido.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[CommonModule,AdicionarPedidoComponent]
})
export class HeaderComponent implements OnInit {
  @ViewChild('pedido', { static: false }) pedido!: AdicionarPedidoComponent;
  isExpanded = false;

 
  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit() {
  
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      if (this.isExpanded) {
        sidebar.classList.add('expanded');
      } else {
        sidebar.classList.remove('expanded');
      }
    }
  }


  public abrirModalLateral() {
    this.pedido.openSidebar()
  }

}
