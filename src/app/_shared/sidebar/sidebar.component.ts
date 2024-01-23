import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { ThreadList } from 'src/app/_interfaces/chatMessage.inteface';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ThreadService } from 'src/app/_services/thread/thread.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  name: string = ""
  threadList: ThreadList[] = []

  constructor(private authService: AuthService, private cookieService: CookieService, private navigate: Router , private router:ActivatedRoute , private threadService: ThreadService ) {
    const accessToken = this.authService.getUser().accessToken
    const _id = this.authService.getUser().user._id
    this.threadService.getAllThread(accessToken , _id).subscribe((res:any)=>{
      for (const thread of res.metadata) {
        this.threadList.push({
          _id: thread.thread_id,
          name_thread: thread.content[0].text.value
        })
      }
    })
  }

  ngOnInit() {
    this.name = this.authService.getUser().user.name
  }
  Logout() {
    if (confirm('Bạn có chắc muốn đăng xuất ?') == true) {
      this.cookieService.deleteAll()
      localStorage.clear()
      this.navigate.navigate(['/login'])
    }
  }
}
