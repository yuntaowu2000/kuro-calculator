const data = [
    {
        "chapter": "序章",
        "event" : "（非必要）烘焙甜点坊的负评",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "交给警察",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "私底下给予制裁",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "序章",
        "event": "（非必要）旧下水道的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部·A",
        "event": "（非必要）搜寻某样重要的物品",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部·A",
        "event" : "（非必要）调查跟踪狂",
        "type" : false,
        "base_L": 0,
        "base_G": 0,
        "base_C": 1,
        "choice": [
            {
                "text": "把握跟踪狂的破绽将其逮捕",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "提议对八卦杂志爆料",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "丢硬币决定命运",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第一部·A",
        "event": "（非必要）找出涂鸦犯",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
    },
    {
        "chapter": "第一部·A",
        "event" : "（非必要）失踪的朋友",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
        "choice": [
            {
                "text": "把父亲交给警方处理",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "让父亲写切结书",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第一部·A",
        "event" : "（非必要）ZA分公司大楼的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部·B",
        "event" : "（非必要）搜寻前地痞",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第一部·B",
        "event" : "（非必要）纪念公园的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部·B",
        "event" : "（非必要）廉价T手机诈骗案",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "透过协会交给警方",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "交给MK公司的警备员",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第二部·A",
        "event" : "（非必要）和哥哥一决胜负",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "感同身受地提建议",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "故意煽动",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第二部·A",
        "event" : "（非必要）夺回「龙车」的委托",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "交给协会",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "交给警察",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "交给马尔铎克公司",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第二部·A",
        "event" : "（非必要）协助料理对决",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·A",
        "event" : "（非必要）海蚀洞的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·A",
        "event" : "（非必要）亚伦的传闻",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第二部·B",
        "event" : "（非必要）回收逾期未还的书籍",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·B",
        "event" : "（非必要）业绩下滑的原因是……",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "诚实地向男社员坦白",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "对男社员隐瞒这件事",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第二部·B",
        "event" : "（非必要）拉修卡尔的背景调查",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "普通医院",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "黑市医生伊莎贝尔",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第二部·B",
        "event" : "（非必要）童话庭园的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
    },
    {
        "chapter": "第二部·B",
        "event" : "（非必要）地下铁废弃轨道的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "断章",
        "event" : "（非必要）童话庭园的通缉魔兽②",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
    },
    {
        "chapter": "断章",
        "event" : "（必要）外景场勘的护卫",
        "type" : true,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "断章",
        "event" : "（非必要）灵异照片的真相",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "断章",
        "event" : "（非必要）涅梅丝岛的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·A",
        "event" : "（非必要）纪念公园的通缉魔兽②",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·A",
        "event" : "（非必要）赛登地区·上水道的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·A",
        "event" : "（非必要）消失的外劳",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "交给协会和NGO",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "交给中介康拉德",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第三部·B",
        "event" : "（非必要）逃走的病患",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "建议他冷静下来判断状况",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "透过激起他的野心来说服他",
                "L":0,
                "G":5,
                "C":0,
            },
        ]
    },
    {
        "chapter": "第三部·B",
        "event" : "（非必要）童话庭园的通缉魔兽③",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
    },
    {
        "chapter": "第三部·C",
        "event" : "（非必要）旧下水道的通缉魔兽②",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·C",
        "event" : "（非必要）咪西秀的危机",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "训斥",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "威胁",
                "L":0,
                "G":0,
                "C":5,
            },
        ]
    },
    {
        "chapter": "第三部·D",
        "event" : "（非必要）自我的风格",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·D",
        "event" : "（非必要）泰雷尔地区·上水道的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "尾声",
        "event" : "（半必要）甜点大赛的参赛者",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "尾声",
        "event" : "（半必要）追寻传说中的鱼王",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "尾声",
        "event" : "（半必要）废弃区的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
];

const potential_routes = {
    "[4,5,6]" : "100201000112000011000000001000100000",
    "[4,6,4]" : "100101000111000011000000000100000000",
    "[4,6,5]" : "100201000112000011000000000100000000",
    "[4,6,6]" : "100201000112000011000000001100100000",
    "[5,4,6]" : "100200000102000000000000001000100000",
    "[5,5,4]" : "100201000011000010000000000000000000",
    "[5,5,5]" : "100201000112000011000000000000000000",
    "[5,5,6]" : "100201000112000010000000001000000000",
    "[5,6,4]" : "100201000011000011000000000100000000",
    "[5,6,5]" : "100201000111000011000000000000000000",
    "[6,4,4]" : "100200000000000000000000000000000000",
    "[6,4,5]" : "100200000102000000000000000000000000",
    "[6,4,6]" : "000200000102000000000000001000000000",
    "[6,5,4]" : "100201000010000000000000000000000000",
    "[6,5,5]" : "100201000100000000000000000000000000",
};

// required value to level up
const law_level_values = [0, 0, 0, 20, 40, 60];
const gray_level_values = [0, 0, 0, 16, 32, 48];
const chaos_level_values = [0, 0, 0, 10, 20, 30];


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