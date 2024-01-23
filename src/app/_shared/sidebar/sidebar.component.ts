import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ThreadList } from 'src/app/_interfaces/chatMessage.inteface';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ThreadService } from 'src/app/_services/thread/thread.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  active: string = "";
  name: string = ""
  threadList: ThreadList[] = []
  selected: string = ""

  constructor(private authService: AuthService,
    private cookieService: CookieService,
    private navigate: Router,
    private threadService: ThreadService,
    private route: ActivatedRoute
  ) {
    this.getAllThread()
    this.name = this.authService.getUser().user.name
  }


  Logout() {
    if (confirm('Bạn có chắc muốn đăng xuất ?') == true) {
      this.cookieService.delete('accessToken');
      this.cookieService.delete('refreshToken');
      localStorage.clear()
      this.navigate.navigate(['/login'])
    }
  }

  getAllThread() {
    this.threadService.getAllThread().subscribe((res: any) => {
      for (const thread of res.metadata) {
        this.threadList.push({
          _id: thread.thread_id,
          name_thread: thread.content[0].text.value
        })
      }
    })
  }
}
