<template>
  <el-upload
    drag
    :action="uploadImageAction"
    multiple
    :headers="{
      token,
    }"
    name="img"
    :data="data"
    :on-success="uploadSuccess"
    :on-error="uploadError"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      上传文件拖到此处或， <em>点击上传文件</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        只能上传jpg/png 文件，且大小不得大于 500kb
      </div>
    </template>
  </el-upload>
</template>
<script setup>
import { uploadImageAction } from "~/api/image";
import { getToken } from "~/composables/auth";
import { toast } from "~/composables/util";

const token = getToken();

defineProps({
  data: Object,
});

const emit = defineEmits(["success"]);

const uploadSuccess = (response, uploadFile, uploadFiles) => {
  console.log(response);
  emit("success", {
    response,
    uploadFile,
    uploadFiles,
  });
};

const uploadError = (error, uploadFile, uploadFiles) => {
  let msg = JSON.parse(error.message).msg || "上传失败";
  toast(msg, "error");
};
</script>