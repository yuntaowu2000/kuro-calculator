import json
from copy import deepcopy
data = [
    {
        "chapter": "第一部①",
        "event" : "（必要）拉古纳的负面传闻",
        "type" : True,
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
        "type": False,
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
        "type": False,
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
        "type" : False,
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
        "type": True,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部②",
        "event" : "（非必要）被夺走的秘密情报",
        "type" : False,
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
        "type" : False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第一部②",
        "event": "（非必要）迪尔克纪念公园的通缉魔兽",
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一部②",
        "event" : "（非必要）杀害罪大恶极之人",
        "type" : False,
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
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩①",
        "event": "（非必要）空洞核心的异状",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩①",
        "event": "（非必要）大量囤积导力炉",
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩①",
        "event": "（必要）欧茱峡谷的通缉魔兽",
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩①",
        "event": "（非必要）青梅竹马的纸条",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩①",
        "event": "（非必要）克雷优复兴支援基金的危机",
        "type": False,
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
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩①",
        "event": "（非必要）伊帝斯西郊的通缉魔兽",
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·凯文①",
        "event": "（非必要）追寻梦幻极品甜点！",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·凯文①",
        "event": "（非必要）搜索希娜姆",
        "type": False,
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
        "type": True,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·黎恩②",
        "event": "（非必要）查明试乘用机车的意外原因",
        "type": False,
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
        "type": False,
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
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）消失的燕子亲鸟",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）节点区域的通缉魔兽",
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）莫名不适的原因",
        "type": False,
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
        "type": False,
        "base_L": 0,
        "base_G": 0,
        "base_C": 1,
    },
    {
        "chapter": "第二部·范恩②",
        "event": "（非必要）被玷污的艺术",
        "type": False,
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
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二部·范恩③",
        "event": "（非必要）GR锦标赛",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩④",
        "event": "（非必要）梦幻快照",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩④",
        "event": "（非必要）住宿预约网站的纠纷",
        "type": False,
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
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩④",
        "event": "（必要）失踪的快递员",
        "type": True,
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
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·凯文②",
        "event": "（非必要）地下水道的通缉魔兽",
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·凯文②",
        "event": "（非必要）伪造筹码的源头",
        "type": True,
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
        "type": False,
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
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·黎恩③",
        "event": "（非必要）龙来的传说鱼王",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·黎恩③",
        "event": "（非必要）儿子的行踪",
        "type": False,
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
        "type": False,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩⑥",
        "event": "（非必要）那部小说的作者是？",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三部·范恩⑥",
        "event": "（非必要）消失的医局长的行踪",
        "type": False,
        "base_L": 5,
        "base_G": 5,
        "base_C": 5,
    },
    {
        "chapter": "第三部·范恩⑥",
        "event": "（非必要）安卡维尔南郊的通缉魔兽②",
        "type": False,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
    },
]

nodes = []

def setup_nodes(data_arr, node_arr):
    for i in range(len(data_arr)):
        curr_item = []
        node_arr.append(curr_item)
        if "choice" in data_arr[i]:
            for c in data_arr[i]["choice"]:
                curr_item.append([
                    data_arr[i]["base_L"] + c["L"],
                    data_arr[i]["base_G"] + c["G"],
                    data_arr[i]["base_C"] + c["C"]
                ])
        else:
            curr_item.append([
                data_arr[i]["base_L"],
                data_arr[i]["base_G"],
                data_arr[i]["base_C"]
            ])

print("setup nodes")
setup_nodes(data, nodes)

potential_sums = []

# first event
for i in range(len(nodes[0])):
    potential_sums.append({
        "selection": str(i),  # 0 is the first choice 
        "result": nodes[0][i],  # resulting LGC values
    }) 

def generate_sum_and_route(node_arr, sum_arr, start_from):
    for i in range(start_from, len(node_arr)):
        tmp = deepcopy(sum_arr)
        sum_arr = []
        for j in range(len(tmp)):
            r = tmp[j]["result"]
            for k in range(len(node_arr[i])):
                curr_node = node_arr[i][k]
                sum_arr.append({
                    "selection": tmp[j]["selection"] + str(k),  # record all choices to this event
                    "result": [r[0] + curr_node[0], r[1] + curr_node[1], r[2] + curr_node[2]]  # resulting LGC values
                })
    return sum_arr
print("generate sum and route")
potential_sums = generate_sum_and_route(nodes, potential_sums, 1)

def get_level(target_exp_arr, actual_val):
    for i in range(len(target_exp_arr)):
        if actual_val < target_exp_arr[i]:
            return i
    return len(target_exp_arr)

# only leave a single selection for each LGC result
final_selection = {}

law_level_values = [0, 24, 36, 48, 72]
gray_level_values = [0, 24, 36, 48, 72]
chaos_level_values = [0, 20, 30, 45, 60]
print("computing levels")
for i in range(len(potential_sums)):
    # record the levels, for best comparison at the end.
    law_level = get_level(law_level_values, potential_sums[i]["result"][0])
    gray_level = get_level(gray_level_values, potential_sums[i]["result"][1])
    chaos_level = get_level(chaos_level_values, potential_sums[i]["result"][2])
    final_level = json.dumps([law_level, gray_level, chaos_level])

    final_selection[final_level] = potential_sums[i]["selection"]

with open("precalculated_routes.json", "w") as f:
    print(final_selection, file=f)
