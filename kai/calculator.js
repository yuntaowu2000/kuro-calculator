const data = [
    {
        "chapter": "第一部①",
        "event" : "（必要）拉古纳的负面传闻",
        "type" : true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "让他做清扫工作",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "让他宣传正面消息",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "禁止进出店里",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第一部①",
        "event": "（非必要）塞克托军武流出品",
        "type": false,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "以装有限制器的状态购入",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "解除限制器的状态购入",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第一部①",
        "event": "（非必要）逃不了的非法打工",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "删除资讯后交给协会处理",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "交由受害者自行处理",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "连同设备一起彻底破坏",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第一部①",
        "event" : "（非必要）宇宙产业的投资纠纷",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "透露和MK公司的关系",
                "L":0,
                "G":0,
                "C":5,
            },
            {
                "text": "透露和CID的关系",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第一部①",
        "event": "（必要）赛登地区·上水道的通缉魔兽",
        "type": true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部②",
        "event" : "（非必要）被夺走的秘密情报",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "建议他把真相告诉公司",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "提出装蒜的手段",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "向雷因兹提议私下交易",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第一部②",
        "event" : "（非必要）想看的书",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第一部②",
        "event": "（非必要）迪尔克纪念公园的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部②",
        "event" : "（非必要）杀害罪大恶极之人",
        "type" : false,
        "base_L": 0,
        "base_G": 0,
        "base_C": 1,
        "choice": [
            {
                "text": "作为罪犯逮捕",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "交给铁盾",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第一部③",
        "event": "（非必要）搜索走失猫咪",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩①",
        "event": "（非必要）空洞核心的异状",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩①",
        "event": "（非必要）大量囤积导力炉",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩①",
        "event": "（必要）欧茱峡谷的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩①",
        "event": "（非必要）青梅竹马的纸条",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩①",
        "event": "（非必要）克雷优复兴支援基金的危机",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "兄弟的情谊",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "恶徒的道义",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "被封印的「记忆」",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第二部·范恩①",
        "event": "（非必要）终极卷饼的灵感",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩①",
        "event": "（非必要）伊帝斯西郊的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·凯文①",
        "event": "（非必要）追寻梦幻极品甜点！",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·凯文①",
        "event": "（非必要）搜索希娜姆",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "拜托法奇尔总管安排",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "叫他自首过去的轻犯罪",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "刻意把他赶出萨尔巴德",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第二部·凯文①",
        "event": "（必要）阳炎沙丘的通缉魔兽",
        "type": true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩②",
        "event": "（非必要）查明试乘用机车的意外原因",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
        "choice": [
            {
                "text": "让洪里诚实自首",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "当作是一场「测试」",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第二部·黎恩②",
        "event": "（非必要）调查CEO的疑点",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "控告秘书和前执行长",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "在董事会上指控前执行长",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "握住秘书和前执行长的把柄",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第二部·黎恩②",
        "event": "（非必要）稀有金属开采坑道的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）消失的燕子亲鸟",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）节点区域的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）莫名不适的原因",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "呼唤对方询问情况",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "不由分说击昏对方",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）来自神秘追随者的支援",
        "type": false,
        "base_L": 0,
        "base_G": 0,
        "base_C": 1,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）被玷污的艺术",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "建议她表现白色心情",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "建议她表现黑色心情",
                "L":0,
                "G":0,
                "C":5,
            },
            {
                "text": "建议她同时表现两种心情",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第二部·范恩③",
        "event": "（非必要）复兴黑芒街",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩③",
        "event": "（非必要）GR锦标赛",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩④",
        "event": "（非必要）梦幻快照",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩④",
        "event": "（非必要）住宿预约网站的纠纷",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "劝诫他，让他冷静下来",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "威嚇他，让他闭上嘴",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第三部·范恩④",
        "event": "（非必要）安卡维尔南郊的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩④",
        "event": "（必要）失踪的快递员",
        "type": true,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "阻止",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "不阻止",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第三部·凯文②",
        "event": "（非必要）义贼留下的传说宝藏",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·凯文②",
        "event": "（非必要）地下水道的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·凯文②",
        "event": "（非必要）伪造筹码的源头",
        "type": true,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "公开辨别真伪的方式根绝问题",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "刻意放任维持现状",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第三部·范恩⑤",
        "event": "（非必要）脱逃偶像",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "称赞她的努力",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "激起她的自尊",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第三部·范恩⑤",
        "event": "（非必要）寻找真正的家人",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·黎恩③",
        "event": "（非必要）龙来的传说鱼王",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·黎恩③",
        "event": "（非必要）儿子的行踪",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "慢慢想清楚就好",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "坦率一点比较好",
                "L":5,
                "G":0,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第三部·黎恩③",
        "event": "（非必要）龙来瀑布的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩⑥",
        "event": "（非必要）那部小说的作者是？",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩⑥",
        "event": "（非必要）消失的医局长的行踪",
        "type": false,
        "base_L": 5,
        "base_G": 5,
        "base_C": 5,
    },
    {
        "chapter": "第三部·范恩⑥",
        "event": "（非必要）安卡维尔南郊的通缉魔兽②",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
    },
];

const potential_routes = {
    "[5,4,4]": "212102001000002000100100000200000000000010000",
    "[4,4,4]": "212102001000002000201100000200010000110010000",
    "[5,5,2]": "211101000000001000100100000200010000000010000",
    "[4,5,3]": "212102001000001000100100000200010000110010000",
    "[4,5,4]": "212102001000002000100100000200010000110000000", 
    "[4,3,5]": "212102001000002000201200010200010100000010000", 
    "[5,3,5]": "212102001000002000201200000000000000000010000", 
    "[4,4,5]": "212102001000002000201200010200010000100010000",
    "[3,5,5]": "212102001000002000101100010200010100110000000", 
};

// required value to level up
const law_level_values = [0, 24, 36, 48, 72];
const gray_level_values = [0, 24, 36, 48, 72];
const chaos_level_values = [0, 20, 30, 45, 60];


// all I/O elements for calcualting LGC
const button = document.getElementById("button");
const law_result_field = document.getElementById("law_result");
const gray_result_field = document.getElementById("gray_result");
const chaos_result_field = document.getElementById("chaos_result");

// all I/O elements for calculating routes given a set of LGC levels
const input_l = document.getElementById("input_l");
const input_g = document.getElementById("input_g");
const input_c = document.getElementById("input_c");
const button_calculate = document.getElementById("button_calculate");
const warning_div = document.getElementById("warning_div");

class EventData {
    // Each event data object consists of
    // the event data as a dictionary as in data
    // the table that the data will be shown in
    // a checker box indicating if this event is completed
    // a selector if the event has choices resulting in different LGC values
    constructor(data, target_table) {
        this.data = data;
        this.target_table = target_table;
        this.setupRow();
        this.setupResult();
    }
    
    /**
     * set up the first part of the UI
     * each row consists of chapter name, event name, 
     * event finished or not (checker), 
     * options (selector if there is any, text "无选项" if there is no option)
     */
    setupRow() {
        this.row = document.createElement("tr");

        let ch = document.createElement("th");
        ch.innerText = this.data["chapter"];
        this.row.appendChild(ch);

        // name of the event
        let event_n = document.createElement("th");
        event_n.innerText = this.data["event"];
        this.row.appendChild(event_n);

        // did we finish the event?
        // default to true if the event is mandatory
        let checker_col = document.createElement("th");
        this.checker = document.createElement("input");
        this.checker.type = "checkbox";
        if (this.data["type"]) {
            this.checker.checked = true;
            this.checker.disabled = true;
        } else {
            this.checker.checked = false;
            this.checker.addEventListener("change", ()=>this.onCheckerChanged());
        }
        checker_col.appendChild(this.checker);
        this.row.appendChild(checker_col);

        // what did we select?
        let select_col = document.createElement("th");
        if (this.data["choice"]) {
            this.selector = document.createElement("select");
            for (let i = 0; i < this.data["choice"].length; i++) {
                let opt = document.createElement("option");
                opt.value = i;
                opt.innerText = this.data["choice"][i]["text"];
                this.selector.appendChild(opt);
            }
            this.selector.addEventListener("change", ()=>this.onSelectorChanged());
            select_col.appendChild(this.selector);

            this.selected_val = 0;
        } else {
            select_col.innerText = "无选项";
        }

        this.row.appendChild(select_col);
        this.target_table.appendChild(this.row);
    }

    /**
     * set up the second part of the UI
     * showing the LGC value in the table
     * if the event is not finished by the user, the result will be 0,0,0
     * if the event is finished, update the result accordingly with the base LGC and the option LGC.
     */
    setupResult() {
        if (!this.data["type"]) {
            this.result = [0, 0, 0];
        } else if (!this.data["choice"]) {
            this.result = [this.data["base_L"], this.data["base_G"], this.data["base_C"]];
        } else {
            // initially, the selected index is default to 0
            let additional_r = this.data["choice"][0];
            this.result = [this.data["base_L"] + additional_r["L"], this.data["base_G"] + additional_r["G"], this.data["base_C"] + additional_r["C"]];
        }
        this.law_col = document.createElement("th");
        this.law_col.innerText = this.result[0];

        this.gray_col = document.createElement("th");
        this.gray_col.innerText = this.result[1];

        this.chaos_col = document.createElement("th");
        this.chaos_col.innerText = this.result[2];

        this.row.appendChild(this.law_col);
        this.row.appendChild(this.gray_col);
        this.row.appendChild(this.chaos_col);
    }

    /**
     * handles when a checker box is checked/unchecked
     * if a checker box is checked, this means that the event is finished, we should include its LGC in the result
     * if the checker box is unchecked, the event is not done by the user, we should not include the LGC in the result
     */
    onCheckerChanged() {
        if (this.checker.checked) {
            // this event is completed
            if (this.selector) {
                let additional_r = this.data["choice"][this.selected_val];
                this.result = [this.data["base_L"] + additional_r["L"], this.data["base_G"] + additional_r["G"], this.data["base_C"] + additional_r["C"]];
            } else {
                this.result = [this.data["base_L"], this.data["base_G"], this.data["base_C"]];
            }
        } else {
            this.result = [0, 0, 0];
        }
        this.law_col.innerText = this.result[0];
        this.gray_col.innerText = this.result[1];
        this.chaos_col.innerText = this.result[2];
    }

    /**
     * handles when a selector is updated
     * update the LGC based on the selection if the event is completed
     * otherwise, we only update the selected value and keep the result to be 0,0,0
     */
    onSelectorChanged() {
        this.selected_val = this.selector.options.selectedIndex;
        let additional_r = this.data["choice"][this.selected_val];
        if (this.checker.checked) {
            this.result = [this.data["base_L"] + additional_r["L"], this.data["base_G"] + additional_r["G"], this.data["base_C"] + additional_r["C"]];
            this.law_col.innerText = this.result[0];
            this.gray_col.innerText = this.result[1];
            this.chaos_col.innerText = this.result[2];
        }
    }

    getResult() {
        return [].concat(this.result);
    }
}

/**
 * get the LGC levels based on the corresponding values calcualted from events 
 * @param {*} target_exp_arr: array, one of law_level_values, gray_level_values, chaos_level_values
 * @param {*} actual_val: integer, value of the LGC value calcualted from events 
 * @returns 
 */
function getLevel(target_exp_arr, actual_val) {
    for (let i = 0; i < target_exp_arr.length; i++) {
        if (actual_val < target_exp_arr[i]) {
            return i;
        }
    }
    return target_exp_arr.length;
}

/**
 * calculate the exp sums of LGC, based on the provided event data
 * @param {*} event_data: an array of EventData object
 * @returns array [law exp, gray exp, chaos exp] 
 */
function calculateSum(event_data) {
    let law = 0;
    let gray = 0;
    let chaos = 0;
    for (let ed of event_data) {
        let r = ed.getResult();
        law += r[0];
        gray += r[1];
        chaos += r[2];
    }
    return [law, gray, chaos]
}

/**
 * given an array of LGC value calculated, update the corresponding LGC results in the UI.
 * @param {*} total_val: an array of LGC exp calculated
 * @param {*} law_result_field: UI element for showing law exp and law level.
 * @param {*} gray_result_field: UI element for showing gray exp and gray level.
 * @param {*} chaos_result_field: UI element for showing chaos exp and chaos level.
 */
function setVal(total_val, law_result_field, gray_result_field, chaos_result_field) {
    law_result_field.innerText = total_val[0] + " (LV" + getLevel(law_level_values, total_val[0]) + ")";
    gray_result_field.innerText = total_val[1] + " (LV" + getLevel(gray_level_values, total_val[1]) + ")";
    chaos_result_field.innerText = total_val[2] + " (LV" + getLevel(chaos_level_values, total_val[2]) + ")";
}

const table = document.getElementById("table");
const all_event_data = [];

// setup the table
// also record all the UI and data values
for (let i = 0; i < data.length; i++) {
    all_event_data.push(new EventData(data[i], table));
}

// button is for updating the final LGC values at the end of the game
button.addEventListener("click", ()=>{
    total_val = calculateSum(all_event_data);
    setVal(total_val, law_result_field, gray_result_field, chaos_result_field);
});

/**
 * simulate the selection based on user inputed LGC levels they want to achieve at the end of the game
 */
function simulateSelections() {
    // read the LGC levels as selector input by the user.
    let l_val = Number(input_l.value);
    let g_val = Number(input_g.value);
    let c_val = Number(input_c.value);

    let lgc_val = JSON.stringify([l_val, g_val, c_val]);

    // the user provided level combination is not achievable
    if (!(lgc_val in potential_routes)) {
        warning_div.innerHTML = "无法实现该LGC路线，请重试";
        return;
    }
    warning_div.innerHTML = "";
    // we can achieve the level combination, get the route from precalculated dictionary
    let selected_route = potential_routes[lgc_val];

    // simulate the selections
    for (let i = 0; i < all_event_data.length; i++) {
        if (all_event_data[i].selector) {
            all_event_data[i].selector.value = selected_route[i];
            all_event_data[i].selected_val = selected_route[i];
        }
        all_event_data[i].checker.checked = true;
        all_event_data[i].onCheckerChanged();
    }
    button.click();
}

button_calculate.addEventListener("click", ()=>simulateSelections());