import device from '@system.device';

export default {
    data: {
        title: "",
        displayHeight: 100,
        columnNum: 4,
        windowWidth: 360,
        windowHeight: 780,
        itemHeight: 90,
        buttons: [
                ["AC","+/-","%","/"],
                ["7","8","9","*"],
                ["4","5","6","-"],
                ["1","2","3","+"],
                ["0",".","="],
        ],
    },
    onInit() {
        this.title = this.$t('strings.world');
        device.getInfo({success:(data)=>{
            this.windowWidth = data.windowWidth;
            this.windowHeight = data.windowHeight;
            this.itemHeight = this.windowWidth / this.columnNum;
        }});
    }
}
