import { Component, OnInit } from '@angular/core';

interface Config {
  key: string;
  name: string;
  code: string;
  desc: string;
  version: string;
  status: string;
}
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.less']
})
export class ConfigComponent implements OnInit {

  listOfData: Config[] = [
    {
      key: '1',
      name: '用户登录-登录失败多少次数后锁定账号',
      code: 'sys.login.failedNumAfterLockAccount',
      desc: '200',
      version: '否',
      status: '正常'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
