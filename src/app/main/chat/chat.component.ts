import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientGruard } from 'src/app/_guards/clientProvider';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  constructor(private clientguard: ClientGruard, private route: Router ) {}

  ngOnInit(){
    if(this.clientguard.CanLoadComponentClient() == true){
      this.route.navigate(['/login'])
    }
  }


}
