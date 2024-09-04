import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from '../service/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // Array de URLs para as quais o cabeçalho Authorization não deve ser incluído
  private excludedUrls: string[] = [
    '/authentication',
    // Adicione mais URLs ou padrões conforme necessário
  ];

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.loginService.dadosUser)
    const token = this.loginService.dadosUser.token;

    // Verifica se a URL da requisição está na lista de URLs excluídas
    const isExcludedUrl = this.excludedUrls.some(url => request.url.includes(url));

    // Se o token existir e a URL não estiver na lista de exceções, adicione o cabeçalho Authorization
    if (token && !isExcludedUrl) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
          'Custom-Header': 'CustomHeaderValue'
          // Adicione mais cabeçalhos aqui, se necessário
        }
      });
    }

    // Manipulando a resposta para validar os códigos de status
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            // Aqui você pode validar o status code
            if (event.status === 200) {
              console.log('Tudo certo!', event.status);
            } else if (event.status === 401) {
              console.log('Não autorizado!', event.status);
              // Você pode redirecionar o usuário para a tela de login ou realizar outra ação
            }
            // Adicione mais validações de status conforme necessário
          }
        },
        error: (error) => {
          // Se houver um erro, você pode lidar com ele aqui
          console.error('Erro na requisição:', error.status, error.message);
          // Você pode também redirecionar para uma página de erro, dependendo do status
        }
      })
    );
  }
}
