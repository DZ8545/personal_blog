<template>
  <div class="edit">
    <h2>{{ id ? "编辑" : "创建" }}文章</h2>
    <el-form label-width="120px">
      <el-form-item label="大分类">
        <el-select
          v-model="model.kind"
          placeholder="请选择"
          style="width: 240px"
        >
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-select
          v-model="model.categories"
          multiple
          placeholder="请选择"
          style="width: 240px"
        >
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input size="large" v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input size="large" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <mavon-editor
          v-model="model.body"
          :toolbars="toolbars"
          @imgAdd="imgAdd"
          ref="md"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import request from "@/network/request";

const model = ref({
  title: "",
  description: "",
  categories: [],
  kind: "",
  body: "",
  time: Number,
});
const toolbars = ref({
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: true, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: true, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: true, // 单双栏模式
  preview: true, // 预览
});
const md = ref(null);
async function imgAdd(pos, file) {
  // 第一步.将图片上传到服务器.
  let formdata = new FormData();
  formdata.append("file", file);
  const res = await request.post("/upload", formdata).then((response) => {
    // if (response.data.status === 200) {
    //   //将请求返回的图片的url返回，且回显到当前编辑器中
    //   md.value.$img2Url(pos, response.data.url);
    //   console.log(response.data.url);
    // } else {
    //   console.log("上传图片失败");
    // }
    md.value.$img2Url(pos, response.data.url);
    console.log(response.data.url);
  });
  // md.$img2Url(pos, res.data.url);
}
const categories = ref([]);
const router = useRouter();
const save = async () => {
  model.value.time = Date.now();
  if (model.value.title) {
    if (props.id) {
      await request.put(`/articles/${props.id}`, model.value);
      ElMessage({
        showClose: true,
        message: "修改成功!",
        type: "success",
      });
    } else {
      await request.post("/articles", model.value);
      ElMessage({
        showClose: true,
        message: "保存成功!",
        type: "success",
      });
    }
    model.value.title = "";
    // router.push("/category/list");
  } else {
    ElMessage.error("请填入内容！！！");
  }
};

// eslint-disable-next-line no-undef
const props = defineProps(["id"]);

async function fecth() {
  const res = await request.get(`/article/${props.id}`);
  model.value = res.data;
}
async function fecthCategories() {
  const res = await request.get(`/categories`);
  categories.value = res.data;
}
fecthCategories();
if (props.id) {
  fecth();
}
</script>

<style scoped></style>
