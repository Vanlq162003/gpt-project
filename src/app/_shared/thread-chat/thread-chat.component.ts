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
  isLoading: boolean = false
  idSelectedThreadChat: string = ""
  chatContent: string = ""

  chatList: ChatList[] = []

  chatRequest: ChatRequest = {
    _id: "",
    message: ""
  }

  constructor(private route: ActivatedRoute,
    private chatService: ChatService,
    private navigate: Router,
    private threadService: ThreadService
  ) {
    this.route.params.subscribe((param) => {
      this.idSelectedThreadChat = String(param['id']);
      this.getThreadChat()
    });
  }
  onSubmit() {
    if (this.chatContent != '') {

      this.chatRequest.message = this.chatContent
      if (this.idSelectedThreadChat == "undefined") {
        this.chatRequest._id = ""
      } else {
        this.chatRequest._id = this.idSelectedThreadChat
      }

      this.chatList.push({
        role: 'user',
        message: this.chatContent
      });

      this.chatContent = '';
      this.isLoading = true;

      // call api ở đây
      this.chatService.createChat(this.chatRequest).subscribe((res: any) => {
        this.chatList.push({
          role: res.metadata[0].role,
          message: res.metadata[0].content[0].text.value
        });
        this.isLoading = false
        if (this.idSelectedThreadChat == "undefined") {
          this.navigate.navigate(['home/' + res.metadata[0].thread_id])
        }
        setTimeout(() => { this.scrollToMarkedElement(); }, 10)
      })

      setTimeout(() => { this.scrollToMarkedElement(); }, 10)
    }
  }

  scrollToMarkedElement() {
    const markedElement = this.threadBody.nativeElement.querySelector('[data-scroll-to="true"]');
    if (markedElement) {
      markedElement.scrollIntoView();
    }
  }

  getThreadChat() {
    this.chatList = []
    if (this.idSelectedThreadChat != "") {
      this.threadService.getOneThread(this.idSelectedThreadChat).subscribe((res: any) => {
        for (const m of res.metadata.content) {
          this.chatList.push({
            role: m.text.role,
            message: m.text.value
          })
        }
        setTimeout(() => { this.scrollToMarkedElement(); }, 100)
      })
    }
  }
}
