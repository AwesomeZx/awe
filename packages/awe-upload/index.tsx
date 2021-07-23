import { defineComponent, App, SetupContext, toRef } from 'vue';
import './index.scss';

const uploadProps = {
  url: {
    type: String,
    default: ''
  },
  headers: {
    type: Object,
    default: function () {
      return {};
    }
  },
  fileList: {
    type: Array,
    default: function () {
      return [];
    }
  }
};

interface File {
  url?: string,
  name?: string,
}

const AweUpload = defineComponent({
  name: 'AweUpload',
  props: uploadProps,
  setup (props, { slots }: SetupContext) {
    const fileList = toRef(props, 'fileList');
    const nfileList = fileList.value;
    const handleChange = (value) => {
      nfileList.push(
        {
          name: value.target.files[0].name,
          size: value.target.files[0].size,
          type: value.target.files[0].type
        }
      );
    };

    const deleteFile = (index) => {
      nfileList.splice(index, 1);
    };

    return () => (
      <div class="aweupload">
        <div class="aweupload-content">
          {slots.default && slots.default()}
          <input
            type="file"
            class="nfile"
            title=""
            onChange={handleChange} />
        </div>
        <div class="aweupload-list">
          {nfileList.map((file: File, index) => {
            return (
              <div class="aweupload-list-item">
                <img src="../../../assets/img/upload/attachment.svg" />
                <span class="aweupload-list-item-title">
                  <a
                    href={file.url}
                    download={file.name}
                  >{file.name}</a>
                </span>
                <span
                  class="aweupload-close"
                  onClick={ () => deleteFile(index)}>
                  <img src="../../../assets/img/upload/close.svg" />
                  </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
  data: function () {
    return {
      nfileList: this.fileList
    };
  }
});

AweUpload.install = function (app: App) {
  app.component(AweUpload.name, AweUpload);
};

export default AweUpload;
