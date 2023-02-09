<template>
  <div class="bg">
    <div class="container">
      
    </div>

    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-hover v-slot="{ isHovering, props }" disabled>
          <v-card
            :elevation="isHovering ? 12 : 2"
            class="mx-auto"
            height="1500"
            max-width="700"
            v-bind="props"
          > <br><center><h2>ผลการลงทะเบียนทั้งหมด</h2></center>
            <v-card-text class="my-4 text-center text-h6">
              <div v-for="(value, index) in data" :key="index" class="ddd">
                <v-card class="mx-auto" max-width="400">
                  <v-card-text>
                    <div>รหัสรายวิชา : {{ value.id }}</div>
                    <br />
                    <p class="text-h5 text--primary">{{ value.name }}</p>
                    <br />
                    <div class="text--primary">
                      <h3>{{ value.teacher }}<br /></h3>
                      <p>
                        หน่วยกิต ( บรรยาย - ปฏิบัติ - จำนวนชั่วโมง ) <br />
                        {{ value.credit }}
                      </p>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
                      Learn More
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <v-card
                      v-if="reveal"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="height: 100%"
                    >
                      <v-card-text class="pb-0">
                        <p class="text-h4 text--primary">คำอธิบายหลายวิชา</p>
                        <p>
                          {{ value.description }}
                        </p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn
                          variant="text"
                          color="teal-accent-4"
                          @click="reveal = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition> </v-card
                ><br />
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useRigister } from "../stores/ADD";
import { ref } from "vue";
const m = useRigister();

const reveal = ref(false);
const data = m.getState;
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.bg {
  background-color: rgb(139, 182, 209);
}
</style>
