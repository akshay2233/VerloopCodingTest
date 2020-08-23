import { Component } from '@angular/core';
export interface Leader {
  id: string,
  name: string;
  points: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VerloopAssignment';
  lstLeaderBoard: Leader[] = [];


  fnAddLeaderBoard() {
    debugger
    const reqObj: Leader = {
      id: (this.lstLeaderBoard.length + 1).toString(),
      name: 'Leader' + (this.lstLeaderBoard.length + 1),
      points: 0,
    }
    this.lstLeaderBoard.push(reqObj);
  }

  fnIncrement(i) {
    this.lstLeaderBoard[i].points = this.lstLeaderBoard[i].points + 1;
    this.fnSort();
  }

  fnDecrement(i) {
    this.lstLeaderBoard[i].points = this.lstLeaderBoard[i].points > 0 ? this.lstLeaderBoard[i].points - 1 : 0;
    this.fnSort();
  
  }

  fnSort() {
    this.lstLeaderBoard.sort((a: any, b: any) => { return a.points - b.points }).reverse();
  }
}
