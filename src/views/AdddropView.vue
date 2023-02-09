<template>
  <div class="dd">
    <center><h1>ADD | DROP</h1></center>

    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-hover v-slot="{ isHovering, props }" disabled>
          <v-card
            :elevation="isHovering ? 12 : 2"
            class="mx-auto"
            height="600"
            max-width="700"
            v-bind="props"
          >
            <v-card-text class="my-4 text-center text-h6">
              <div>
                <div class="head">
                  <h4>ค้นหาวิชาที่ต้องลงทะเบียน</h4>
                  <br />
                  <form @submit.prevent="addID">
                    <input
                      type="text"
                      v-model="course_Code"
                      placeholder="รหัสวิชา"
                    /><br /><br />

                    <v-btn variant="outlined">
                      <button type="submit">ลงทะเบียน</button>
                    </v-btn>
                  </form>
                </div>
                <article v-if="(x = courseData.find((elem) => elem.id == course_Code))">
                  <div class="border">
                    <p>
                      <b>รหัสวิชา กก: </b> <span>{{ x.id }}</span>
                    </p>
                    <p>
                      <b>ชื่อวิชา : </b> <span>{{ x.name }}</span>
                    </p>
                    <p>
                      <b>หน่วยกิต : </b><span>{{ x.credit }}</span>
                    </p>
                  </div>
                </article>
                <article v-else>
                  <br />
                  <p>ไม่พบผลการค้นหา</p>
                  <br />
                </article>

                <hr />
                <div>
                  <br />
                  <h4>รายวิชารอยืนยัน</h4>

                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th class="text-left">รหัสวิชา</th>
                        <th class="text-left">ชื่อวิชา</th>
                        <th class="text-left">หน่วยกิต</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(course, index) in coursedata" :key="index">
                        <td>{{ course.id }}</td>
                        <td>{{ course.name }}</td>
                        <td>{{ course.credit }}</td>
                        <td>
                          <v-btn variant="flat" color="error"
                            ><button @click="remove(index)">ลบ</button></v-btn
                          >
                        </td>
                      </tr>
                    </tbody>
                  </v-table>

                  <v-btn rounded="pill" color="primary">
                    <button @click="Confirmed">ยืนยันการลงทะเบียน</button>
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import courseData from "../DATA/course.json";
import { useRigister } from "../stores/ADD";

const rigister = useRigister();
const course_Code = ref("");
let coursedata = ref([]);
function addID() {
  const data = courseData.find((elem) => elem.id == course_Code.value);
  if (data) {
    coursedata.value.push(data);
    course_Code.value = "";
  } else {
    alert("รหัสวิชาไม่ถูกต้อง");
  }
}
function remove(id) {
  if (confirm("ต้องการลบรายวิชาหรือไม่ ?")) {
    coursedata.value.pop(id);
  }
}
function Confirmed() {
  if (coursedata.value.length != 0) {
    coursedata.value.forEach((subject) => {
      rigister.storeState(subject);
    });
    console.log(rigister.getState);
    coursedata.value = [];
    alert("ตรวจสองตรงหน่าลงทะเบียน");
  } else {
    alert("โปรดเลือกวิชาก่อนทำการลงทะเบียน");
  }
}
</script>
<style scoped>
.border {
  margin: 20px auto;
  padding: 0.5em;
  border: 3px solid gray;
}
template {
  text-align: center;
}
.head {
  border: 2px solid;
  padding-bottom: 5%;
  padding-top: 5%;
}
.h1 {
  background-color: black;


}
.dd {
  background-color: rgb(139, 182, 209);
}
</style>
