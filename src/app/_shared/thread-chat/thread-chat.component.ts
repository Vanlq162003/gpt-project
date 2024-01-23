import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChatList, ChatRequest } from 'src/app/_interfaces/chatMessage.inteface';
import { ChatService } from 'src/app/_services/chat/chat.service';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ThreadService } from 'src/app/_services/thread/thread.service';





@Component({
  selector: 'app-thread-chat',
  templateUrl: './thread-chat.component.html',
  styleUrls: ['./thread-chat.component.scss']
})
export class ThreadChatComponent {
  @ViewChild('threadBody') threadBody!: ElementRef;




  lastMessageIndex: number = 0;
  isLoading: boolean = false
  idSelectedThreadChat: string = ""
  chatContent: string = ""


  chatList: ChatList[] = []

  chatRequest: ChatRequest = {
    _id: "",
    message: ""
  }

  constructor(private route: ActivatedRoute, private chatService: ChatService, private authService: AuthService, private navigate: Router, private threadService: ThreadService) {
    this.route.params.subscribe((param) => {
      this.idSelectedThreadChat = String(param['id']);  
      if (this.idSelectedThreadChat != "") {
        this.chatList = []
        const accessToken = this.authService.getUser().accessToken
        const _id = this.authService.getUser().user._id
        this.threadService.getOneThread(this.idSelectedThreadChat, accessToken, _id).subscribe((res: any) => {
          for (const m of res.metadata.content) {
            this.chatList.push({
              role: m.text.role,
              message: m.text.value
            })
          }
          setTimeout(() => { this.scrollToMarkedElement(); }, 100)

          
        })
        
      } else {
        this.chatList = []
      }
    });
  }
  onSubmit() {
    if (this.chatContent != '') {
      
      this.chatRequest.message = this.chatContent
      if(this.idSelectedThreadChat == "undefined"){
        this.chatRequest._id = ""
      }else{
        this.chatRequest._id = this.idSelectedThreadChat
      }
      
      
      this.chatList.push({
        role: 'user',
        message: this.chatContent
      });

      this.chatContent = '';
      this.isLoading = true;

      setTimeout(() => { this.scrollToMarkedElement(); }, 1)

      const accessToken = this.authService.getUser().accessToken
      const _id = this.authService.getUser().user._id


      // call api ở đây
      this.chatService.createChat(this.chatRequest, accessToken, _id).subscribe((res: any) => {
        this.chatList.push({
          role: res.metadata[0].role,
          message: res.metadata[0].content[0].text.value
        });
        this.isLoading = false
        if (this.idSelectedThreadChat == "undefined") {
          this.navigate.navigate(['home/' + res.metadata[0].thread_id])
        }

        setTimeout(() => { this.scrollToMarkedElement(); }, 1)
      })
    }
  }


  scrollToMarkedElement() {
    const markedElement = this.threadBody.nativeElement.querySelector('[data-scroll-to="true"]');
    if (markedElement) {
      markedElement.scrollIntoView();
    }
  }



  ngAfterViewInit() {
    this.scrollToMarkedElement()
  }
}
