import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionarios } from '../model/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API = 'https://localhost:7103/api/Funcionario';

  constructor(private httpClient: HttpClient) { }

  listByDepartment() {
    return this.httpClient.get<Funcionarios[]>(this.API);
  }
}
