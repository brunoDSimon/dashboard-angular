import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-lateral-commons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-lateral-commons.component.html',
  styleUrl: './modal-lateral-commons.component.scss'
})
export class ModalLateralCommonsComponent {
  @Input() title: string = '';
  @Input() backdrop: boolean = true;

  @ViewChild('sidebar') sidebar!: ElementRef;

  backdropValue() {
    return this.backdrop ? 'static' : false;
  }

  ngAfterViewInit() {
    // Inicializa o offcanvas usando o Bootstrap JavaScript
    const bootstrap = (window as any).bootstrap;
    if (bootstrap) {
      new bootstrap.Offcanvas(this.sidebar.nativeElement, {
        backdrop: this.backdropValue()
      });
    }
  }

  open() {
    const bootstrap = (window as any).bootstrap;
    if (bootstrap) {
      const offcanvasElement = this.sidebar.nativeElement;
      const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
      offcanvas.show();
    }
  }

  close() {
    const bootstrap = (window as any).bootstrap;
    if (bootstrap) {
      const offcanvasElement = this.sidebar.nativeElement;
      const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
      offcanvas.hide();
    }
  }
}
