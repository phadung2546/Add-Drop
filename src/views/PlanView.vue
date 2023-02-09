<template>
  <div class="bg">
    <center><H1 class="display-4">แผนการเรียน</H1></center>

    <v-row>
      <v-col cols="12">
        <v-hover v-slot="{ isHovering, props }" disabled>
          <v-card
            :elevation="isHovering ? 12 : 2"
            class="mx-auto"
            height="700"
            max-width="1000"
            v-bind="props"
          >
            <v-card-text class="my-4 text-h6">
              <v-table theme="dark">
                <thead>
                  <tr>
                    <th class="text-left">รหัสรายวิชา</th>
                    <th class="text-left">ชื่อวิชา</th>
                    <th>หน่วยกิต</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.name">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.credit }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import courseData from "../DATA/course.json";
const data = courseData;
</script>

<style scoped>
.bg {
  background-color: rgb(139, 182, 209);
}
</style>
