<template>
  <br />
  <nav>
    <center><h1>News | ข่าวสารล่าสุด</h1></center>
  </nav>
  <br />
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col order="6">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="300px">
            <v-img
              src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/328766512_570374051644226_413207802658016125_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGy00bQ6dKFw6Jn40DNIh8xhABwq0dYBoaEAHCrR1gGhvd1BQPNhUVD1NWNrI8rtqJhrYKS60p73oS5hAvfsHUP&_nc_ohc=vIQu1U5xfbUAX8qrKsR&_nc_oc=AQmDafkPgJcb2ZG2oq2WBp2NFqrxEB8NPe_WAQTFoMkD6zh4Z0UrG_9x98JWdxG2eXQ&tn=uc6GzFsbdJ-UNQwV&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBXEh_NHTm8M-zBOjnvGGU-el5uzES6eNNX0C273zFKaA&oe=63EAC498"
              height="200px"
              cover
            ></v-img>

            <v-card-title> รู้ลึก....รู้จริง เกี่ยวกับหลักสูตร </v-card-title>

            <v-card-subtitle> ในคณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  🤩 สวัสดีน้อง ๆ ที่ผ่านการคัดเลือก TCAS รอบ Portfolio ของคณะวิทยาศาสตร์
                  มหาวิทยาลัยแม่โจ้ ในวันที่ 6 ก.พ. 2566 เวลา 11:45 - 13:00 น.
                  คณะวิทยาศาสตร์ จะจัดกิจกรรม "โค้งสุดท้าย ก่อนตัดสินใจยืนยันสิทธิ์ใน
                  myTCAS.com รอบ Portfolio รู้ลึก....รู้จริง
                  เกี่ยวกับหลักสูตรในคณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้" โดยมีตัวแทนคณาจารย์
                  รุ่นพี่สาขา คณะวิทยาศาสตร์ มาร่วมกันตอบคำถามน้อง ๆ
                  ก่อนที่จะยืนยันสิทธิ์เข้าเรียนต่อที่คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                  น้อง ๆ สามารถลงทะเบียนเข้าร่วมได้ที่ https://forms.gle/GVwMWdTXHQfMGzr57
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col order="12">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="300px">
            <v-img
              src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/329225066_3788501108043295_1925629023123057570_n.jpg?stp=dst-jpg_p600x600&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGTZ_EAjVF2BhRuOspWQlPm7DCD1y5JSzzsMIPXLklLPFskVMiHAcc5kb33dh__lNOi9UoDiWnw1NZ3GA2N_Nv8&_nc_ohc=zxj7faew8oMAX_2_T76&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfCOm2zx7FXMCqNWfNnrnDHjxvH4SrYxagHXYRcqZlqMRw&oe=63EABB76"
              height="200px"
              cover
            ></v-img>

            <v-card-title> comcamp 21 </v-card-title>

            <v-card-subtitle>
              "อินเทอร์เน็ตทุกสรรพสิ่ง (IOT : Internet of Things)
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show1 = !show1"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  ในระหว่างวันที่ 2-4 กุมภาพันธ์ 2566
                  หลักสูตรวิทยาการคอมพิวเตอร์และชมรมคอมพิวเตอร์ คณะวิทยาศาสตร์
                  มหาวิทยาลัยแม่โจ้ จัดโครงการอบรมเชิงปฏิบัติการค่ายยุวชนคอมพิวเตอร์
                  ครั้งที่ 21 ในหัวข้อเรื่อง "อินเทอร์เน็ตทุกสรรพสิ่ง (IOT : Internet of
                  Things) และการนำเสนอข้อมูลด้วยภาพ (Data Visualization)" ให้กับน้องๆ
                  นักเรียนจำนวน 45 คน ทั้งหมด 18 โรงเรียน ณ อาคาร 60 ปี แม่โจ้
                  และอาคารจุฬาภรณ์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                  โดยมีวัตถุประสงค์เพื่อเสริมสร้างความรู้ด้านคอมพิวเตอร์และนวัตกรรมเทคโนโลยีสารสนเทศ
                  พร้อมทั้งพัฒนาด้านคุณธรรม จริยธรรมและเน้นความสามัคคี
                  ประชาสัมพันธ์พร้อมกับแนะแนวทางการศึกษา
                  ให้แก่นักเรียนชั้นมัธยมศึกษาตอนปลาย
                  ซึ่งเป็นเยาวชนที่อยู่ในวัยศึกษาและกำลังก้าวเข้าสู่การเรีย
                  นในระดับอุดมศึกษา
                  อันจะส่งผลให้เป็นการส่งเสริมให้มีผู้สนใจจะเข้าศึกษาในสาขาวิชาวิทยาการคอมพิวเตอร์เพิ่มมากยิ่งขึ้น
                  และเป็นกำลังสำคัญของชาติต่อไป
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col order="1">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="400px">
            <v-img
              src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/328625852_461688432698657_4447092139426367137_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHeJnl2unL_02Whm7Pp67WPp6KPlw1sXI6noo-XDWxcjnpe8ZzRcfQmXdA3PbXGwfbFN2odg4-_1qI950HZ5Mu7&_nc_ohc=8krI2FsjbacAX9kK3AO&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBcvSqE0V3WtkxYzDa4LpFnOy4Z9qT3GfUp3KH8jw-85A&oe=63E92E37"
              height="200px"
              cover
            ></v-img>

            <v-card-title> งานเกษตรแม่โจ้ 90 ปี </v-card-title>

            <v-card-subtitle> วันที่ 16-24 ธันวาคม 2566 </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show2 = !show2"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>

                <v-card-text>
                  📣เตรียมพบกับ งานเกษตรแม่โจ้ 90 ปี : เกษตร | อาหาร | สุขภาพ วันที่ 16-24
                  ธันวาคม 2566 🥦🍃 Kaset Maejo 90th Anniversary : Agriculture | Food |
                  Health 16-24 Dec 2023 ติดตามภาพกิจกรรมเพิ่มเติมได้ที่
                  https://erp.mju.ac.th/informationDetail.aspx?newsId=4999
                  #90thanniversary #MJU #แม่โจ้ #มหาวิทยาลัยแห่งชีวิต
                  #ติดตามกิจกรรมดีๆทุกช่องทาง👇
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col order="6">
        <v-sheet class="pa-2 ma-2"> First in markup, but middle in row </v-sheet>
      </v-col>
      <v-col order="12">
        <v-sheet class="pa-2 ma-2"> Second in markup, but last in row </v-sheet>
      </v-col>
      <v-col order="1">
        <v-sheet class="pa-2 ma-2"> Third in markup, but first in row </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
const show1 = ref(false);
const show2 = ref(false);
</script>

<style></style>
