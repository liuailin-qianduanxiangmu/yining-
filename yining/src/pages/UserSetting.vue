<template>
  <div class="content1" style="margin-top: 30px">
    <div class="animated fadeIn">
      <div class="row">
        <div
          class="col-md-12"
          style="padding-right: 5%; padding-left: 5%; width: 90%"
        >
          <div class="card">
            <div class="card-header" style="background-color: #99ccff">
              <strong class="card-title">修改用户信息</strong>
              <!--                        <a>-->
              <!--                            <button id="btn_add" type="button" class="float-right btn btn-outline-primary btn-sm">-->
              <!--                                <i class="fa fa-plus"></i>-->
              <!--                                &nbsp; 添加子账号-->
              <!--                            </button>-->
              <!--                        </a>-->
            </div>
            <div class="card-body card-block">
              <form
                action="#"
                method="post"
                enctype="multipart/form-data"
                class="form-horizontal"
              >
                <!--                            <div class="row form-group">-->
                <!--                                <div class="col col-md-3"><label for="name-input" class=" form-control-label">名称</label></div>-->
                <!--                                <div id='name-p' class="col-6 col-md-7">-->
                <!--                                    <input type="text" id="name-input" name="name" readonly="readonly" value="" class="form-control">-->

                <!--                                </div>-->
                <!--                                <div class='col-4 col-md-2'>-->
                <!--                                    <button id='name-modify' type="button" onclick='clickModify(this)' class="btn btn-link" style='display: block' sureid="name-sure" cancelid="name-cancel" inputid="name-input">修改</button>-->
                <!--                                    <button id='name-sure' style='display: none' onclick='clickSure(this)' type="button" modifyid="name-modify" cancelid="name-cancel" inputid="name-input" class="btn btn-outline-primary">确定</button>-->
                <!--                                    <button id='name-cancel' style='display: none' onclick='clickCancel(this)' type="button" sureid="name-sure" modifyid="name-modify" inputid="name-input" class="btn btn-outline-danger">取消</button>-->
                <!--                                </div>-->
                <!--                            </div>-->

                <!-- username -->
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="username-input" class="form-control-label"
                      >用户名</label
                    >
                  </div>
                  <div id="username-p" class="col-6 col-md-7">
                    <input
                      type="text"
                      id="username-input"
                      name="username"
                      readonly="readonly"
                      value="tyut"
                      class="form-control"
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button
                      id="username-modify"
                      type="button"
                      onclick="clickModify(this)"
                      class="btn btn-link"
                      style="display: block"
                      sureid="username-sure"
                      cancelid="username-cancel"
                      inputid="username-input"
                    >
                      修改
                    </button>
                    <button
                      id="username-sure"
                      style="display: none"
                      onclick="clickSure(this)"
                      type="button"
                      modifyid="username-modify"
                      cancelid="username-cancel"
                      inputid="username-input"
                      class="btn btn-outline-primary"
                    >
                      确定
                    </button>
                    <button
                      id="username-cancel"
                      style="display: none"
                      onclick="clickCancel(this)"
                      type="button"
                      sureid="username-sure"
                      modifyid="username-modify"
                      inputid="username-input"
                      class="btn btn-outline-danger"
                    >
                      取消
                    </button>
                  </div>
                </div>

                <!-- password -->
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="password-input" class="form-control-label"
                      >密码</label
                    >
                  </div>
                  <div id="password-p" class="col-6 col-md-7">
                    <input
                      type="text"
                      id="password-input"
                      name="password"
                      readonly="readonly"
                      value="tyut"
                      class="form-control"
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button
                      id="password-modify"
                      type="button"
                      onclick="clickModify(this)"
                      class="btn btn-link"
                      style="display: block"
                      sureid="password-sure"
                      cancelid="password-cancel"
                      inputid="password-input"
                    >
                      修改
                    </button>
                    <button
                      id="password-sure"
                      style="display: none"
                      onclick="clickSure(this)"
                      type="button"
                      modifyid="password-modify"
                      cancelid="password-cancel"
                      inputid="password-input"
                      class="btn btn-outline-primary"
                    >
                      确定
                    </button>
                    <button
                      id="password-cancel"
                      style="display: none"
                      onclick="clickCancel(this)"
                      type="button"
                      sureid="password-sure"
                      modifyid="password-modify"
                      inputid="password-input"
                      class="btn btn-outline-danger"
                    >
                      取消
                    </button>
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="location-input" class="form-control-label"
                      >位置</label
                    >
                  </div>
                  <div id="location-p" class="col-6 col-md-7">
                    <input
                      type="text"
                      id="location-input"
                      name="location"
                      readonly="readonly"
                      value="太原理工大学"
                      class="form-control"
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button
                      id="location-modify"
                      onclick="clickModify(this)"
                      type="button"
                      class="btn btn-link"
                      style="display: block"
                      sureid="location-sure"
                      cancelid="location-cancel"
                      inputid="location-input"
                    >
                      修改
                    </button>
                    <button
                      id="location-sure"
                      onclick="clickSure(this)"
                      style="display: none"
                      type="button"
                      class="btn btn-outline-primary"
                      modifyid="location-modify"
                      cancelid="location-cancel"
                      inputid="location-input"
                    >
                      确定
                    </button>
                    <button
                      id="location-cancel"
                      onclick="clickCancel(this)"
                      style="display: none"
                      type="button"
                      class="btn btn-outline-danger"
                      sureid="location-sure"
                      modifyid="location-modify"
                      inputid="location-input"
                    >
                      取消
                    </button>
                  </div>
                </div>
                <!-- 联系人 -->
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="contact-input" class="form-control-label"
                      >联系人</label
                    >
                  </div>
                  <div class="col-6 col-md-7" id="contact-p">
                    <input
                      type="text"
                      id="contact-input"
                      name="contact"
                      readonly="readonly"
                      value="张三"
                      class="form-control"
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button
                      id="contact-modify"
                      onclick="clickModify(this)"
                      type="button"
                      class="btn btn-link"
                      style="display: block"
                      sureid="contact-sure"
                      cancelid="contact-cancel"
                      inputid="contact-input"
                    >
                      修改
                    </button>
                    <button
                      id="contact-sure"
                      onclick="clickSure(this)"
                      style="display: none"
                      type="button"
                      class="btn btn-outline-primary"
                      modifyid="contact-modify"
                      cancelid="contact-cancel"
                      inputid="contact-input"
                    >
                      确定
                    </button>
                    <button
                      id="contact-cancel"
                      onclick="clickCancel(this)"
                      style="display: none"
                      type="button"
                      class="btn btn-outline-danger"
                      sureid="contact-sure"
                      modifyid="contact-modify"
                      inputid="contact-input"
                    >
                      取消
                    </button>
                  </div>
                </div>
                <!-- contact_tel -->
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="contact_tel-input" class="form-control-label"
                      >联系人电话</label
                    >
                  </div>
                  <div id="contact_tel-p" class="col-6 col-md-7">
                    <input
                      type="text"
                      id="contact_tel-input"
                      name="contact_tel"
                      readonly="readonly"
                      value="19834004466"
                      class="form-control"
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button
                      id="contact_tel-modify"
                      onclick="clickModify(this)"
                      type="button"
                      class="btn btn-link"
                      style="display: block"
                      sureid="contact_tel-sure"
                      cancelid="contact_tel-cancel"
                      inputid="contact_tel-input"
                    >
                      修改
                    </button>
                    <button
                      id="contact_tel-sure"
                      onclick="clickSure(this)"
                      style="display: none"
                      type="button"
                      class="btn btn-outline-primary"
                      modifyid="contact_tel-modify"
                      cancelid="contact_tel-cancel"
                      inputid="contact_tel-input"
                    >
                      确定
                    </button>
                    <button
                      id="contact_tel-cancel"
                      onclick="clickCancel(this)"
                      style="display: none"
                      type="button"
                      class="btn btn-outline-danger"
                      sureid="contact_tel-sure"
                      modifyid="contact_tel-modify"
                      inputid="contact_tel-input"
                    >
                      取消
                    </button>
                  </div>
                </div>
                <!-- describe -->
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="description-input" class="form-control-label"
                      >描述</label
                    >
                  </div>
                  <div id="description-p" class="col-6 col-md-7">
                    <input
                      type="text"
                      id="description-input"
                      name="description"
                      readonly="readonly"
                      value="太原理工大学的设备管理员"
                      class="form-control"
                    />
                  </div>
                  <div class="col-4 col-md-2">
                    <button
                      id="description-modify"
                      type="button"
                      onclick="clickModify(this)"
                      style="display: block"
                      sureid="description-sure"
                      cancelid="description-cancel"
                      inputid="description-input"
                      class="btn btn-link"
                    >
                      修改
                    </button>
                    <button
                      id="description-sure"
                      style="display: none"
                      onclick="clickSure(this)"
                      type="button"
                      modifyid="description-modify"
                      cancelid="description-cancel"
                      inputid="description-input"
                      class="btn btn-outline-primary"
                    >
                      确定
                    </button>
                    <button
                      id="description-cancel"
                      style="display: none"
                      onclick="clickCancel(this)"
                      type="button"
                      sureid="description-sure"
                      modifyid="description-modify"
                      inputid="description-input"
                      class="btn btn-outline-danger"
                    >
                      取消
                    </button>
                  </div>
                </div>
                <!--create_time-->
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label class="form-control-label">创建时间</label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input
                      type="text"
                      id="date-input"
                      name="description"
                      readonly="readonly"
                      class="form-control"
                      value="2022-05-23T16:56:01"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          class="col-md-12"
          style="padding-right: 5%; padding-left: 5%; width: 90%"
        >
          <div class="card">
            <div class="card-header" style="background-color: #99ccff">
              <strong class="card-title">子账号</strong>
            </div>
            <div>
              <div style="display: inline-block; padding: 20px 30px 3px 170px">
                <label for="name">用户名称:&nbsp;</label>
                <!-- <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="请输入用户的名称"
                  style="
                    font-size: 13px;
                    padding-left: 15px;
                    border-radius: 8px;
                    border: 1px solid #bdbdbd;
                  "
                /> -->
                <a-input
                  v-model:value="value"
                  placeholder="请输入用户的名称"
                  style="border-radius: 10px; width: 220px; height: 28px"
                />
              </div>

              <div style="display: inline-block; padding-right: 30px">
                <label for="location">位置:&nbsp;</label>
                <a-input
                  v-model:value="value"
                  placeholder="请输入位置"
                  style="border-radius: 10px; width: 220px; height: 28px"
                />
                <!-- <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="请输入位置"
                  style="
                    font-size: 13px;
                    padding-left: 15px;
                    border-radius: 8px;
                    border: 1px solid #bdbdbd;
                  "
                /> -->
              </div>
              <a-button
                type="primary"
                shape="round"
                :size="size"
                style="
                  color: #fff;
                  height: 30px;
                  padding: 8px;
                  padding-top: 0;
                  padding-bottom: 0;
                "
                >确定</a-button
              >
              <a-button
                type="primary"
                shape="round"
                :size="size"
                style="
                  color: #878787;
                  height: 30px;
                  padding: 8px;
                  padding-top: 1px;
                  padding-bottom: 1px;
                  background-color: #f0f0f0;
                  border: none;
                  margin-left: 10px;
                "
              >
                重置</a-button
              >
              <!-- <button
                style="
                  border: 0px;
                  background-color: #1e90ff;
                  color: white;
                  border-radius: 8px;
                "
                id="search"
              >
                确定
              </button>
              <button
                style="
                  border: 0px;
                  display: inline-block;
                  margin-left: 5px;
                  border-radius: 8px;
                "
                id="reset"
              >
                重置
              </button> -->
            </div>

            <div class="card-body">
              <!-- <table
                id="bootstrap-data-table"
                class="table table-striped"
                style="font-size: 14px"
              >
                <thead>
                  <tr>
                    <th>
                      名称<a id="name_asc" onclick="rank(this)">↑</a>
                      <a id="name_desc" onclick="rank(this)">↓</a>
                    </th>
               
                    <th>
                      位置<a id="location_asc" onclick="rank(this)">↑</a>
                      <a id="location_desc" onclick="rank(this)">↓</a>
                    </th>
                    <th>
                      创建时间<a id="date_asc" onclick="rank(this)">↑</a>
                      <a id="date_desc" onclick="rank(this)">↓</a>
                    </th>
                    <th>
                      联系人<a id="contact_asc" onclick="rank(this)">↑</a>
                      <a id="contact_desc" onclick="rank(this)">↓</a>
                    </th>
                    <th>
                      联系人电话<a id="contact_tel_asc" onclick="rank(this)"
                        >↑</a
                      >
                      <a id="contact_tel_desc" onclick="rank(this)">↓</a>
                    </th>
                    <th>设备</th>
                    <th>详细信息</th>
                    <th>删除</th>
                  </tr>
                </thead>
                <tbody id="user_tr">
                  <tr>
                    <td>tyut</td>
                    <td>太原理工大学</td>
                    <td>2022-05-23T16:56:01</td>
                    <td>张三</td>
                    <td>undefined</td>
                    <td>
                      <a href="equipments.html?uid=1"
                        ><i class="menu-icon fa fa-wrench"></i>查看</a
                      >
                    </td>
                    <td>
                      <a href="editSUser.html?uid=1"
                        ><i class="menu-icon fa fa-i-cursor"></i>修改</a
                      >
                    </td>
                    <td>
                      <a href="javascript:void(0);" onclick="dropchild(1);"
                        ><i class="menu-icon fa fa-user-times"></i>删除</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>shirotest</td>
                    <td>住址</td>
                    <td>null</td>
                    <td>null</td>
                    <td>undefined</td>
                    <td>
                      <a href="equipments.html?uid=15"
                        ><i class="menu-icon fa fa-wrench"></i>查看</a
                      >
                    </td>
                    <td>
                      <a href="editSUser.html?uid=15"
                        ><i class="menu-icon fa fa-i-cursor"></i>修改</a
                      >
                    </td>
                    <td>
                      <a href="javascript:void(0);" onclick="dropchild(15);"
                        ><i class="menu-icon fa fa-user-times"></i>删除</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>admin</td>
                    <td>太原理工大学明向校区</td>
                    <td>null</td>
                    <td>null</td>
                    <td>undefined</td>
                    <td>
                      <a href="equipments.html?uid=2"
                        ><i class="menu-icon fa fa-wrench"></i>查看</a
                      >
                    </td>
                    <td>
                      <a href="editSUser.html?uid=2"
                        ><i class="menu-icon fa fa-i-cursor"></i>修改</a
                      >
                    </td>
                    <td>
                      <a href="javascript:void(0);" onclick="dropchild(2);"
                        ><i class="menu-icon fa fa-user-times"></i>删除</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table> -->
              <!-- <a-table :columns="columns"   :data-source="data" @change="onChange" />
                -->
              <a-table :columns="columns" :data-source="dataSource" bordered>
                <template #bodyCell="{ column, text, record }">
                  <template
                    v-if="['name','time','person', 'phone', 'address'].includes(column.dataIndex)"
                  >
                    <div>
                      <a-input
                        v-if="editableData[record.key]"
                        v-model:value="
                          editableData[record.key][column.dataIndex]
                        "
                        style="margin: -5px 0"
                      />
                      <template v-else>
                        {{ text }}
                      </template>
                    </div>
                  </template>
                  <template v-else-if="column.dataIndex === 'operation'">
                    <div class="editable-row-operations">
                      <span v-if="editableData[record.key]">
                        <a-typography-link style="text-decoration:underline;color:blue" @click="save(record.key)"
                          >保存</a-typography-link
                        >
                        <a-popconfirm
                          title="确定取消吗?"
                          @confirm="cancel(record.key)"
                        >
                          <a style="text-decoration:underline;margin-left:6px;color:blue">取消</a>
                        </a-popconfirm>
                      </span>
                      <span v-else>
                        <a @click="edit(record.key)">编辑</a>
                      </span>
                    </div>
                  </template>
                </template>
              </a-table>
            </div>

            <div
              class="bottom_big"
              style="display: inline-block; padding: 5px 20px 20px 40px"
            >
              <!-- <span class="bottom_1">共 <span id="totalCount">6</span> 条</span> -->
              <!-- <select
                id="selectpage"
                class="bottom_2"
                style="
                  padding-right: 10px;
                  margin-right: 30px;
                  border-radius: 8px;
                "
                onchange="changeSlect();"
              >
                <option value="3" selected="selected" id="defaultSize">
                  3条/页
                </option>
                <option value="5">5条/页</option>
                <option value="10">10条/页</option>
              </select> -->
              <!--页码-->
              <!-- <div class="bottom_3" id="pageNum">
                <a href="javascript:void(0);" onclick="javascript:load(1,3)">
                  &lt; </a
                ><a
                  style="color: #1e90ff"
                  href="javascript:void(0);"
                  onclick="javascript:load(1,3)"
                  >1</a
                ><a href="javascript:void(0);" onclick="javascript:load(2,3)"
                  >2</a
                ><a href="javascript:void(0);" onclick="javascript:load(2,3)">
                  &gt;
                </a>
              </div>
              <div class="bottom_4">
                前往
                <input
                  id="topage"
                  type="text"
                  style="
                    font-size: 13px;
                    padding-left: 7px;
                    border-radius: 8px;
                    border: 1px solid #bdbdbd;
                  "
                />
                页
              </div> -->
              <!-- <a-pagination
                v-model:current="current"
                show-quick-jumper
                :total="30"
                show-size-changer
                @change="onChange"
              /> -->
              <!-- <a-pagination :total="50" show-size-changer show-quick-jumper /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">Copyright © 2020 易宁监测平台</div>
</template>
<script lang="ts">
import {} from "@ant-design/icons-vue";
import axios from "axios";
import { defineComponent, ref,reactive } from "vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import type { UnwrapRef } from 'vue';
import { cloneDeep } from 'lodash-es';
import type { SizeType } from "ant-design-vue/es/config-provider";
dayjs.locale("cn");
const columns = [
  {
    title: "名称",
    dataIndex: "name",
  },
  {
    title: "位置",
    dataIndex: "address",
    width:200,
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "创建时间",
    dataIndex: "time",
    width:200,
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "联系人",
    dataIndex: "person",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "联系电话",
    dataIndex: "phone",
  },
  {
    title: '编辑',
    dataIndex: 'operation',
  },
  // {
  //   title: "设备",
  //   dataIndex: "device",
  // },
  // {
  //   title: "详细信息",
  //   dataIndex: "detail",
  // },
];
// const data = [
//   {
//     key: "1",
//     name: "tyut",
//     address: "太原理工大学",
//     time: "2022-05-23T16:56:01",
//     person: "张三",
//     phone: "123456789",
//     // device: "查看",
//     // detail: "修改",
//   },
//   {
//     key: "2",
//     name: "tyut",
//     address: "太原理工大学",
//     time: "2022-05-23T16:56:01",
//     person: "张三",
//     phone: "123456789",
//     // device: "查看",
//     // detail: "修改",
//   },
//   {
//     key: "3",
//     name: "tyut",
//     address: "太原理工大学",
//     time: "2022-05-23T16:56:01",
//     person: "张三",
//     phone: "123456789",
//     // device: "查看",
//     // detail: "修改",
//   },
//   {
//     key: "4",
//     name: "tyut",
//     address: "太原理工大学",
//     time: "2022-05-23T16:56:01",
//     person: "张三",
//     phone: "123456789",
//     // device: "查看",
//     // detail: "修改",
//   },
//   {
//     key: "5",
//     name: "tyut",
//     address: "太原理工大学",
//     time: "2022-05-23T16:56:01",
//     person: "张三",
//     phone: "123456789",
//     // device: "查看",
//     // detail: "修改",
//   },
// ];
interface DataItem {
  key: string;
  name: string;
  address: string;
  time: string;
  person:string;
  phone:string
}
const data: DataItem[] = [
  {
    key: "1",
    name: "tyut",
    address: "太原理工大学",
    time: "2022-05-23T16:56:01",
    person: "张三",
    phone: "123456789",
    // device: "查看",
    // detail: "修改",
  },
  {
    key: "2",
    name: "tyut",
    address: "太原理工大学",
    time: "2022-05-23T16:56:01",
    person: "张三",
    phone: "123456789",
    // device: "查看",
    // detail: "修改",
  },
  {
    key: "3",
    name: "tyut",
    address: "太原理工大学",
    time: "2022-05-23T16:56:01",
    person: "张三",
    phone: "123456789",
    // device: "查看",
    // detail: "修改",
  },
  {
    key: "4",
    name: "tyut",
    address: "太原理工大学",
    time: "2022-05-23T16:56:01",
    person: "张三",
    phone: "123456789",
    // device: "查看",
    // detail: "修改",
  },
  {
    key: "5",
    name: "tyut",
    address: "太原理工大学",
    time: "2022-05-23T16:56:01",
    person: "张三",
    phone: "123456789",
    // device: "查看",
    // detail: "修改",
  },
];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

export default defineComponent({
  // setup() {
  //   return {
  //     data,
  //     columns,
  //     // onChange: (pagination, filters, sorter, extra) => {
  //     //   console.log('params', pagination, filters, sorter, extra);
  //     // },
  //   };
  // },
  setup() {
    const dataSource = ref(data);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };
    const save = (key: string) => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };
    const cancel = (key: string) => {
      delete editableData[key];
    };
    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
    };
  },
  name: "UserSetting",
  components: {},
  data() {
    return {
      accountShow: "",
      size: ref<SizeType>("small"),
    };
  },
  methods: {},
  created() {
    axios
      .get("http://183.201.200.28:9002/user/pageQuery", {
        headers: {
          ANSWER_ACCESS_TOKEN:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InRlc3QxIiwiZXhwIjoxNjU1NzI0NDEwLCJ1c2VybmFtZSI6InRlc3QxIn0.gkoeLkSSyeH81yyf27d76yCSZVjJi2YbPKAlqBn0Mkc",
        },
      })
      .then(
        (response) => {
          if (response.status == 200) {
            console.log(response);
            this.accountShow = response.data.data;
            console.log(this.accountShow);
          }
        },
        (error) => {}
      );
  },
});
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
.content1 {
  /* overflow-y: scroll; */
}
.card .card-body {
  float: left;
  padding: 1.25em;
  position: relative;
  width: 100%;
}
.card {
  margin-bottom: 30px;
  border-radius: 5px;
  padding: 0;
  border: 0px solid transparent;
  -webkit-box-shadow: 0 0 20px rgb(0 0 0 / 8%);
  box-shadow: 0 0 20px rgb(0 0 0 / 8%);
}
.bottom_big .bottom_1 {
  margin-left: 320px;
  margin-top: 6px;
}
.bottom_big .bottom_4,
.bottom_3,
.bottom_2,
.bottom_1 {
  float: left;
  margin-right: 20px;
}

.bottom_big .bottom_3 a {
  display: inline-block;
  color: black;
  background-color: rgb(242, 242, 242);
  height: 25px;
  width: 30px;
  margin-left: 5px;
  text-align: center;
}

.bottom_big .bottom_3 a {
  display: inline-block;
  color: black;
  background-color: rgb(242, 242, 242);
  height: 25px;
  width: 30px;
  margin-left: 5px;
  text-align: center;
}
a,
button {
  text-decoration: none;
  outline: none !important;
  color: #878787;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.bottom_big .bottom_4 input {
  display: inline-block;
  height: 30px;
  width: 30px;
}
/* 底部 */
.footer {
  color: #78909c;
}

.footer {
  width: 94%;
  height: 85px;
  background-color: #ffffff;
  margin: 0 3.6%;
  margin-top: 40px;
  margin-bottom: -25px;
  padding-top: 30px;
  padding-left: 4%;
}
</style>
