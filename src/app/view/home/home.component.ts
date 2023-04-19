import { Component } from '@angular/core';
import { FinalSpaceService } from 'src/app/service/final-space.service';
import { MatDialog } from '@angular/material/dialog';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: any[] = [];
  characters: any[] = [];

  constructor(private finalSpaceService: FinalSpaceService, private dialog: MatDialog) {}

  ngOnInit() {
    this.finalSpaceService.getData().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Erro ao obter os dados da API:', error);
      }
    );

  }


  openModal(character: any) {
    const dialogRef = this.dialog.open(CharacterComponent, {
      width: '400px',
      data: character
    });

    dialogRef.afterClosed().subscribe(result => {
      // Lógica a ser executada após o fechamento do modal, se necessário
    });
  }

  // getAllCharacter() {
  //   this.finalSpaceService.getAllCharacter().subscribe(
  //     (data) => {
  //       this.character = data;
  //     },
  //     (error) => {
  //       console.error('Erro ao obter os dados da API:', error);
  //     }
  //   );
  // }
}
