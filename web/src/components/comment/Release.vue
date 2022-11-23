<template>
  <div class="release">
    <div class="input">
      <div class="box1">
        <input
          type="text"
          placeholder="昵称(QQ号)"
          @blur="qqCheck"
          v-model="number"
        />
        <input type="email" placeholder="邮箱" v-model="mail" />
        <input type="url" placeholder="网址" />
        <i
          class="iconfont icon-quxiao"
          @click="$emit('cancel')"
          v-if="flag"
        ></i>
      </div>
      <textarea
        class="scrollY messageInputArea"
        placeholder="输入评论(Ctrl+Enter换行,Enter发送)"
        v-model="message"
        @keyup="send"
      ></textarea>
      <div class="expression" title="表情">
        <i
          :class="[
            'iconfont',
            'icon-biaoqing',
            isActive_express ? 'biaoqing_active' : '',
          ]"
          @click="expressClick"
        ></i>
      </div>
      <div class="emojiBox" v-if="isActive_express">
        <div class="emojiBoxTop">
          <div class="emojiType">
            <span
              :class="['typeItem', emojiType === 0 ? 'emojiTypeActive' : '']"
              @click="changeEmojiType(0)"
            >
              人脸
            </span>
            <span
              :class="['typeItem', emojiType === 1 ? 'emojiTypeActive' : '']"
              @click="changeEmojiType(1)"
            >
              猫咪
            </span>
            <span
              :class="['typeItem', emojiType === 2 ? 'emojiTypeActive' : '']"
              @click="changeEmojiType(2)"
            >
              猴子
            </span>
            <span
              :class="['typeItem', emojiType === 3 ? 'emojiTypeActive' : '']"
              @click="changeEmojiType(3)"
            >
              其他
            </span>
          </div>
          <i
            className="iconfont icon-quxiao"
            @click="
              {
                isActive_express = false;
              }
            "
          ></i>
        </div>
        <div class="emojis scrollY">
          <span
            class="emojiItem"
            v-for="item in emoji[emojiType]"
            :title="item.emojiName"
            :key="item.emoji"
            @click="message = message + item.emoji"
            >{{ item.emoji }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import getqq from "@/requset/qq/getqq";

import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
// eslint-disable-next-line no-undef
const props = defineProps(["name", "flag", "parentId"]);
const store = useStore();
const route = useRoute();
const isActive_preview = ref(false);
const isActive_express = ref(false);
const message = ref("");
const number = ref(null);
const mail = ref("");
const comment = ref({
  article: "",
  name: "",
  headImg: "",
  mail: "",
  time: "",
  remark: "",
  recipient: "",
  parent: "",
});
const expressClick = () => {
  isActive_express.value = !isActive_express.value;
  isActive_preview.value = false;
};
// eslint-disable-next-line no-undef
defineEmits(["cancel"]);
async function fetch() {
  const res = await getqq.get("/", {
    params: {
      qq: number.value,
    },
  });
  comment.value.name = res.data.name;
  comment.value.headImg = res.data.imgurl;
  comment.value.mail = res.data.mail;
  mail.value = res.data.mail;
  number.value = res.data.name;
}
function qqCheck() {
  fetch();
}

function send(e) {
  if (e.keyCode === 13 && e.ctrlKey) {
    message.value = message.value + "\n";
    return;
  }
  if (e.keyCode === 13 && message.value.replaceAll("\n", "") !== "") {
    comment.value.parent = props.parentId || "";
    comment.value.recipient = props.name;
    comment.value.article = route.params.id as string;
    comment.value.time = new Date(Date.now()).toLocaleString();
    comment.value.remark = message.value;
    message.value = "";
    if (!comment.value.name || !comment.value.remark) {
      return ElMessage({
        showClose: true,
        message: "请输入QQ号和内容",
        type: "error",
      });
    } else {
      store.dispatch("comment/saveComment", comment.value).then(() => {
        store.dispatch("comment/getCommentList", route.params.id);
        store.dispatch("comment/getCommentNumber", route.params.id);
      });
    }
  }
}

const emojiType = ref(0);
const emoji = [
  [
    { emoji: "😀", emojiName: "嘿嘿" },
    { emoji: "😃", emojiName: "哈哈" },
    { emoji: "😄", emojiName: "大笑" },
    { emoji: "😁", emojiName: "嘻嘻" },
    { emoji: "😆", emojiName: "斜眼笑" },
    { emoji: "😅", emojiName: "苦笑" },
    { emoji: "🤣", emojiName: "笑得满地打滚" },
    { emoji: "😂", emojiName: "笑哭了" },
    { emoji: "🙂", emojiName: "呵呵" },
    { emoji: "🙃", emojiName: "倒脸" },
    { emoji: "🫠", emojiName: "融化" },
    { emoji: "😉", emojiName: "眨眼" },
    { emoji: "😊", emojiName: "羞涩微笑" },
    { emoji: "😇", emojiName: "微笑天使" },
    { emoji: "🥰", emojiName: "喜笑颜开" },
    { emoji: "😍", emojiName: "花痴" },
    { emoji: "🤩", emojiName: "好崇拜哦" },
    { emoji: "😘", emojiName: "飞吻" },
    { emoji: "😗", emojiName: "亲亲" },
    { emoji: "😚", emojiName: "羞涩亲亲" },
    { emoji: "😙", emojiName: "微笑亲亲" },
    { emoji: "🥲", emojiName: "含泪的笑脸" },
    { emoji: "😋", emojiName: "好吃" },
    { emoji: "😛", emojiName: "吐舌" },
    { emoji: "😜", emojiName: "单眼吐舌" },
    { emoji: "🤪", emojiName: "滑稽" },
    { emoji: "😝", emojiName: "眯眼吐舌" },
    { emoji: "🤑", emojiName: "发财" },
    { emoji: "🤗", emojiName: "抱抱" },
    { emoji: "🤭", emojiName: "不说" },
    { emoji: "🫢", emojiName: "睁眼捂嘴" },
    { emoji: "🫣", emojiName: "偷看" },
    { emoji: "🤫", emojiName: "安静的脸" },
    { emoji: "🤔", emojiName: "想一想" },
    { emoji: "🫡", emojiName: "致敬" },
    { emoji: "🤐", emojiName: "闭嘴" },
    { emoji: "🤨", emojiName: "挑眉" },
    { emoji: "😐", emojiName: "冷漠" },
    { emoji: "😑", emojiName: "无语" },
    { emoji: "😶", emojiName: "沉默" },
    { emoji: "🫥", emojiName: "虚线脸" },
    { emoji: "😏", emojiName: "得意" },
    { emoji: "😒", emojiName: "不高兴" },
    { emoji: "🙄", emojiName: "翻白眼" },
    { emoji: "😬", emojiName: "龇牙咧嘴" },
    { emoji: "🤥", emojiName: "说谎" },
    { emoji: "😌", emojiName: "松了口气" },
    { emoji: "😔", emojiName: "沉思" },
    { emoji: "😪", emojiName: "困" },
    { emoji: "🤤", emojiName: "流口水" },
    { emoji: "😴", emojiName: "睡着了" },
    { emoji: "😷", emojiName: "感冒" },
    { emoji: "🤒", emojiName: "发烧" },
    { emoji: "🤕", emojiName: "受伤" },
    { emoji: "🤢", emojiName: "恶心" },
    { emoji: "🤮", emojiName: "呕吐" },
    { emoji: "🤧", emojiName: "打喷嚏" },
    { emoji: "🥵", emojiName: "脸发烧" },
    { emoji: "🥶", emojiName: "冷脸" },
    { emoji: "🥴", emojiName: "头昏眼花" },
    { emoji: "😵", emojiName: "晕头转向" },
    { emoji: "🤯", emojiName: "爆炸头" },
    { emoji: "🤠", emojiName: "牛仔帽脸" },
    { emoji: "🥳", emojiName: "聚会笑脸" },
    { emoji: "🥸", emojiName: "伪装的脸" },
    { emoji: "😎", emojiName: "墨镜笑脸" },
    { emoji: "🤓", emojiName: "书呆子脸" },
    { emoji: "🧐", emojiName: "带单片眼镜的脸" },
    { emoji: "😕", emojiName: "困扰" },
    { emoji: "🫤", emojiName: "郁闷" },
    { emoji: "😟", emojiName: "担心" },
    { emoji: "🙁", emojiName: "微微不满" },
    { emoji: "☹", emojiName: "不满" },
    { emoji: "😮", emojiName: "吃惊" },
    { emoji: "😯", emojiName: "缄默" },
    { emoji: "😲", emojiName: "震惊" },
    { emoji: "😳", emojiName: "脸红" },
    { emoji: "🥺", emojiName: "恳求的脸" },
    { emoji: "🥹", emojiName: "忍住泪水" },
    { emoji: "😦", emojiName: "啊" },
    { emoji: "😧", emojiName: "极度痛苦" },
    { emoji: "😨", emojiName: "害怕" },
    { emoji: "😰", emojiName: "冷汗" },
    { emoji: "😥", emojiName: "失望但如释重负" },
    { emoji: "😢", emojiName: "哭" },
    { emoji: "😭", emojiName: "放声大哭" },
    { emoji: "😱", emojiName: "吓死了" },
    { emoji: "😖", emojiName: "困惑" },
    { emoji: "😣", emojiName: "痛苦" },
    { emoji: "😞", emojiName: "失望" },
    { emoji: "😓", emojiName: "汗" },
    { emoji: "😩", emojiName: "累死了" },
    { emoji: "😫", emojiName: "累" },
    { emoji: "🥱", emojiName: "打呵欠" },
    { emoji: "😤", emojiName: "傲慢" },
    { emoji: "😡", emojiName: "怒火中烧" },
    { emoji: "😠", emojiName: "生气" },
    { emoji: "🤬", emojiName: "嘴上有符号的脸" },
  ],
  [
    { emoji: "😺", emojiName: "大笑的猫" },
    { emoji: "😸", emojiName: "微笑的猫" },
    { emoji: "😹", emojiName: "笑出眼泪的猫" },
    { emoji: "😻", emojiName: "花痴的猫" },
    { emoji: "😼", emojiName: "奸笑的猫" },
    { emoji: "😽", emojiName: "亲亲猫" },
    { emoji: "🙀", emojiName: "疲倦的猫" },
    { emoji: "😿", emojiName: "哭泣的猫" },
    { emoji: "😾", emojiName: "生气的猫" },
  ],
  [
    { emoji: "🙈", emojiName: "非礼勿视" },
    { emoji: "🙉", emojiName: "非礼勿听" },
    { emoji: "🙊", emojiName: "非礼勿言" },
  ],
  [
    { emoji: "😈", emojiName: "恶魔微笑" },
    { emoji: "👿", emojiName: "生气的恶魔" },
    { emoji: "💀", emojiName: "头骨" },
    { emoji: "☠", emojiName: "骷髅" },
    { emoji: "💩", emojiName: "大便" },
    { emoji: "🤡", emojiName: "小丑脸" },
    { emoji: "👹", emojiName: "食人魔" },
    { emoji: "👺", emojiName: "小妖精" },
    { emoji: "👻", emojiName: "鬼" },
    { emoji: "👽", emojiName: "外星人" },
    { emoji: "👾", emojiName: "外星怪物" },
    { emoji: "🤖", emojiName: "机器人" },
    { emoji: "💌", emojiName: "情书" },
    { emoji: "💘", emojiName: "心中箭了" },
    { emoji: "💝", emojiName: "系有缎带的心" },
    { emoji: "💖", emojiName: "闪亮的心" },
    { emoji: "💗", emojiName: "搏动的心" },
    { emoji: "💓", emojiName: "心跳" },
    { emoji: "💞", emojiName: "舞动的心" },
    { emoji: "💕", emojiName: "两颗心" },
    { emoji: "💟", emojiName: "心型装饰" },
    { emoji: "❣", emojiName: "心叹号" },
    { emoji: "💔", emojiName: "心碎" },
    { emoji: "❤", emojiName: "红心" },
    { emoji: "🧡", emojiName: "橙心" },
    { emoji: "💛", emojiName: "黄心" },
    { emoji: "💚", emojiName: "绿心" },
    { emoji: "💙", emojiName: "蓝心" },
    { emoji: "💜", emojiName: "紫心" },
    { emoji: "🤎", emojiName: "棕心" },
    { emoji: "🖤", emojiName: "黑心" },
    { emoji: "🤍", emojiName: "白心" },
    { emoji: "💋", emojiName: "唇印" },
    { emoji: "💯", emojiName: "一百分" },
    { emoji: "💢", emojiName: "怒" },
    { emoji: "💥", emojiName: "爆炸" },
    { emoji: "💫", emojiName: "头晕" },
    { emoji: "💦", emojiName: "汗滴" },
    { emoji: "💨", emojiName: "尾气" },
    { emoji: "🕳", emojiName: "洞" },
    { emoji: "💬", emojiName: "话语气泡" },
    { emoji: "🗨", emojiName: "朝左的话语气泡" },
    { emoji: "🗯", emojiName: "愤怒话语气泡" },
    { emoji: "💭", emojiName: "内心活动气泡" },
    { emoji: "💤", emojiName: "睡着" },
  ],
];
function changeEmojiType(type) {
  if (type !== emojiType.value) {
    emojiType.value = type;
  }
}
</script>

<style scoped lang="less">
.release {
  .input {
    margin-top: 20px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    .messageInputArea {
      border: none;
      width: 100%;
      height: 120px;
      resize: none;
      font-size: 16px;
      background-color: transparent;
      box-sizing: border-box;
      padding: 10px;
      &:focus {
        outline: none;
      }
    }
    .box1 {
      display: flex;
      align-items: center;
      margin-right: 10px;
      margin-left: 10px;
      position: relative;
      input {
        flex: 1;
        padding: 10px;
        border: 0;
        outline: none;
        color: rgba(0, 0, 0, 0.5);
        background-color: inherit;
        &:focus {
          border-bottom: 1px red dashed;
        }
        border-bottom: 1px black dashed;
      }
    }

    .expression {
      display: flex;
      flex-direction: row-reverse;
      .icon-biaoqing {
        font-size: 40px;
        opacity: 0.3;
        &:hover {
          cursor: url(@/assets/cursor/keHand.cur), default !important;
        }
      }
      .biaoqing_active {
        color: deepskyblue;
      }
    }
    .emojiBox {
      width: 100%;
      background-color: transparent;
      box-sizing: border-box;
      padding: 5px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      .emojis {
        overflow-y: scroll;
        height: 100px;
      }
      .emojiBoxTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        margin-bottom: 5px;
        .emojiType {
          .emojiTypeActive {
            border-bottom: 1px solid rgba(0, 0, 0, 0.7);
          }
          .typeItem {
            margin-right: 10px;
            padding-bottom: 3px;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .icon-quxiao {
          &:hover {
            cursor: pointer;
          }
        }
      }
      .emojiItem {
        font-size: 25px;
        cursor: pointer;
        box-sizing: border-box;
        padding: 5px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .input {
      width: 100%;
      box-sizing: border-box;
      .box1 {
        display: block;
        input {
          width: 100%;
        }
      }
    }
  }
}
</style>
