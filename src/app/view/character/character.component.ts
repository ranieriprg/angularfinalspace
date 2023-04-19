import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FinalSpaceService } from 'src/app/service/final-space.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  characters: any[] = []; 
  constructor(private dialog: MatDialog, private apiService: FinalSpaceService){}
  isLoading: boolean = false; // Variável para controlar o estado de carregamento
  error: string = '';

  ngOnInit() {
    // Inicializar o componente
    this.getCharacters();
  }

  getCharacters() {
    this.isLoading = true; // Ativar estado de carregamento
    this.apiService.getCharacters().subscribe(
      (data: any) => {
        this.characters = data;
        this.isLoading = false; // Desativar estado de carregamento
      },
      (error: any) => {
        this.error = 'Erro ao obter os personagens'; // Lidar com erro
        this.isLoading = false; // Desativar estado de carregamento
      }
    );
  }
}
