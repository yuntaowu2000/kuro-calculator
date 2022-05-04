const data_before_5 = [
    {
        "chapter": "第一章",
        "event" : "（必要）调查朋友偷钱的原因",
        "type" : true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "对店铺坦白一切并还钱",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "瞒着店铺还钱",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第一章",
        "event": "（必要）委托运送手提箱",
        "type": true,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第一章",
        "event": "（非必要）被转卖至黑市的钱包",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一章",
        "event": "（必要）地下铁维修通道的通缉魔兽",
        "type": true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第一章",
        "event": "（非必要）荞麦面食谱",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第一章",
        "event" : "（必要）夺回被偷的自行车",
        "type" : true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "交给司法审判",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "请他工作赔偿",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第一章",
        "event": "（非必要）找安妮的猫",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二章",
        "event" : "（半必要）搜寻未曾谋面的妹妹",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "将跟踪狂交给警察",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "用弱点威胁对方",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第二章",
        "event": "（半必要）摆脱销毁勒索笔记",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第二章",
        "event": "（必要）赛登地区·上水道的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二章",
        "event" : "（非必要）送还危险的失物",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
        "choice": [
            {
                "text": "认真地说服",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "使用激将法",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第二章",
        "event": "（非必要）确保海蚀洞观光的安全",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第二章",
        "event" : "（非必要）关于某件货物的请求",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "说服黑月成员",
                "L":0,
                "G":5,
                "C":0,
            },
            {
                "text": "要求交手",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第二章",
        "event": "（非必要）强健体魄的武艺指导",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二章",
        "event": "（非必要）东方人街观光导览",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第二章",
        "event" : "（必要）调查专业老千",
        "type" : true,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
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
                "text": "交给黑月",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第二章",
        "event": "（非必要）真·海蚀洞的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三章",
        "event" : "（半必要）归还某样东西",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "让他以小偷的身份见面",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "让他装成别人见面",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第三章",
        "event" : "（半必要）寻找失踪男友",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "把信交给她，说出所有真相",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "不把信交给她，不说出真相",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第三章",
        "event": "（半必要）解谜游戏测试员",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三章",
        "event": "（必要）纪念公园的通缉魔兽",
        "type": true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三章",
        "event": "（非必要）女孩遗失的东西",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三章",
        "event" : "（非必要）市集的少女扒手",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "提议让寺院收容她",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "提议由总管照顾她",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第三章",
        "event": "（非必要）搜索失散的骆驼",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三章",
        "event" : "（非必要）不当的封口费",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 1,
        "choice": [
            {
                "text": "确保委托人安全",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "优先逮住假警察",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第三章",
        "event": "（非必要）追赶冒牌游击士",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第三章",
        "event" : "（半必要）地下水道的考古学调查",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "优先讨伐魔兽",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "坐收渔翁之利",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第三章",
        "event": "（半必要）挖角额外演员",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第三章",
        "event": "（非必要）阳炎沙丘的通缉魔兽",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第三章",
        "event": "（非必要）制作特别鸡尾酒",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event" : "（半必要）某位大小姐的危机",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "放弃赎金以人质的安全为最优先",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "把赎金交给艾迪",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第四章",
        "event" : "（半必要）迷上新兴宗教的父亲",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "警告他吹笛子会自取灭亡",
                "L":0,
                "G":0,
                "C":5,
            },
            {
                "text": "给予魔兽最后一击",
                "L":5,
                "G":0,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第四章",
        "event": "（半必要）赛登地区·上水道的通缉魔兽②",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event": "（非必要）对决·首都高竞速",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event": "（非必要）测试新的空洞核心",
        "type": false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event": "（非必要）白热化的遥控车对决",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event": "（非必要）最新版·解谜游戏测试员",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event" : "（非必要）机密情报的泄露危机",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
        "choice": [
            {
                "text": "交给乌尔努总公司&警察",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "交给CID",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第四章",
        "event": "（非必要）收集止痛药的材料",
        "type": false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event": "（必要）告发霸凌的教授",
        "type": true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第四章",
        "event": "（非必要）追踪潜伏的机械装置",
        "type": false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "间章",
        "event" : "（半必要）导力网络诈骗事件",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "建议他去找警察",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "当这件事没发生过",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "间章",
        "event" : "（半必要）地下铁维修通道的通缉魔兽②",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "间章",
        "event" : "（必要）搜寻重要的后辈",
        "type" : true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "间章",
        "event" : "（非必要）搜寻准游击士葛雷",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）关于反乡的请求",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）赛登地区·上水道的通缉魔兽③",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（必要）地下铁废弃轨道的通缉魔兽",
        "type" : true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
];

const data_5_guild =[
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·上层：协助...",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "《库鲁格战士团》",
                "L":0,
                "G":0,
                "C":5,
            },
            {
                "text": "《铁盾》",
                "L":5,
                "G":0,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·上层：薇欧菈",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "给予最后一击",
                "L":0,
                "G":3,
                "C":0,
            },
            {
                "text": "避开要害后，交给协会",
                "L":4,
                "G":0,
                "C":0,
            },
            {
                "text": "避开要害后，交给黑月",
                "L":3,
                "G":1,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）关于恐吓信的请求",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "把犯人交给协会",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "把犯人交给黑月",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）关于观光客的请求",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "想办法说服",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "下战帖",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·中层：亚历山卓",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "给予最后一击",
                "L":0,
                "G":3,
                "C":0,
            },
            {
                "text": "上前阻止后，交给协会",
                "L":4,
                "G":0,
                "C":0,
            },
            {
                "text": "上前阻止后，交给黑月",
                "L":3,
                "G":1,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）搜寻某位少爷",
        "type" : true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）帮忙对《A》报酬",
        "type" : true,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·下层：奥林匹亚",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "阻止伊修坦提，交给协会",
                "L":6,
                "G":0,
                "C":0,
            },
            {
                "text": "阻止伊修坦提，交给黑月",
                "L":5,
                "G":1,
                "C":0,
            },
            {
                "text": "照奥林匹亚希望的做",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）地下遗迹·上层的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）地下遗迹·中层的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）地下遗迹·下层的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    }
];

const data_5_other = [
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·上层：协助...",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "《库鲁格战士团》",
                "L":0,
                "G":0,
                "C":5,
            },
            {
                "text": "《铁盾》",
                "L":5,
                "G":0,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·上层：薇欧菈",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "给予最后一击",
                "L":0,
                "G":0,
                "C":10,
            },
            {
                "text": "避开要害后，交给协会",
                "L":4,
                "G":0,
                "C":0,
            },
            {
                "text": "避开要害后，交给黑月",
                "L":3,
                "G":1,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）关于恐吓信的请求",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "把犯人交给协会",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "把犯人交给黑月",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）关于观光客的请求",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "想办法说服",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "下战帖",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·中层：亚历山卓",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "给予最后一击",
                "L":0,
                "G":0,
                "C":10,
            },
            {
                "text": "上前阻止后，交给协会",
                "L":4,
                "G":0,
                "C":0,
            },
            {
                "text": "上前阻止后，交给黑月",
                "L":3,
                "G":1,
                "C":0,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）搜寻某位少爷",
        "type" : true,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（非必要）帮忙对《A》报酬",
        "type" : true,
        "base_L": 0,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "第五章",
        "event" : "（必要）地下遗迹·下层：奥林匹亚",
        "type" : true,
        "base_L": 0,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "阻止伊修坦提，交给协会",
                "L":6,
                "G":0,
                "C":0,
            },
            {
                "text": "阻止伊修坦提，交给黑月",
                "L":5,
                "G":1,
                "C":0,
            },
            {
                "text": "照奥林匹亚希望的做",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）地下遗迹·上层的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）地下遗迹·中层的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "第五章",
        "event" : "（半必要）地下遗迹·下层的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    }
];

const data_final = [
    {
        "chapter": "最终章",
        "event" : "（非必要）调查儿子性格大变的原因",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
        "choice": [
            {
                "text": "让他们想起家人的羁绊",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "用激将法，建议他们离婚",
                "L":0,
                "G":0,
                "C":5,
            }
        ]
    },
    {
        "chapter": "最终章",
        "event" : "（非必要）纪念公园・森林区的通缉魔兽",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "最终章",
        "event" : "（必要）丁格的意志",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "最终章",
        "event" : "（非必要）亲爱的地下万事屋大人",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 1,
    },
    {
        "chapter": "最终章",
        "event" : "（非必要）销声匿迹的好友",
        "type" : false,
        "base_L": 0,
        "base_G": 1,
        "base_C": 0,
        "choice": [
            {
                "text": "说服他们这样下去一定会后悔",
                "L":5,
                "G":0,
                "C":0,
            },
            {
                "text": "刻意批评3人",
                "L":0,
                "G":5,
                "C":0,
            }
        ]
    },
    {
        "chapter": "最终章",
        "event" : "（非必要）决战·车用公路对决",
        "type" : false,
        "base_L": 1,
        "base_G": 1,
        "base_C": 0,
    },
    {
        "chapter": "最终章",
        "event" : "（非必要）新年节甜点评估",
        "type" : false,
        "base_L": 1,
        "base_G": 0,
        "base_C": 0,
    },
];

// required value to level up
const law_level_values = [10, 30, 60, 90, 120];
const gray_level_values = [8, 25, 50, 75, 100];
const chaos_level_values = [5, 15, 30, 45, 75];

const law_result_field1 = document.getElementById("law_result1");
const gray_result_field1 = document.getElementById("gray_result1");
const chaos_result_field1 = document.getElementById("chaos_result1");
const table1 = document.getElementById("table1");
const button1 = document.getElementById("button1");

const div_after_5 = document.getElementById("after_5_div");
const button2 = document.getElementById("button2");
const law_result_field2 = document.getElementById("law_result2");
const gray_result_field2 = document.getElementById("gray_result2");
const chaos_result_field2 = document.getElementById("chaos_result2");

class EventData {
    constructor(data, target_table) {
        this.data = data;
        this.target_table = target_table;
        this.setupRow(data);
        this.setupResult(data);
    }

    setupRow(data) {
        this.row = document.createElement("tr");

        let ch = document.createElement("th");
        ch.innerText = data["chapter"];
        this.row.appendChild(ch);

        // name of the event
        let event_n = document.createElement("th");
        event_n.innerText = data["event"];
        this.row.appendChild(event_n);

        // did we finish the event?
        // default to true if the event is mandatory
        let checker_col = document.createElement("th");
        this.checker = document.createElement("input");
        this.checker.type = "checkbox";
        if (data["type"]) {
            this.checker.checked = true;
            this.checker.disabled = true;
        } else {
            this.checker.checked = false;
            this.checker.addEventListener("change", ()=>this.onCheckerChanged(data));
        }
        checker_col.appendChild(this.checker);
        this.row.appendChild(checker_col);

        // what did we select?
        let select_col = document.createElement("th");
        if (data["choice"]) {
            this.selector = document.createElement("select");
            for (let i = 0; i < data["choice"].length; i++) {
                let opt = document.createElement("option");
                opt.value = i;
                opt.innerText = data["choice"][i]["text"];
                this.selector.appendChild(opt);
            }
            this.selector.addEventListener("change", ()=>this.onSelectorChanged(data));
            select_col.appendChild(this.selector);

            this.selected_val = 0;
        } else {
            select_col.innerText = "无选项";
        }

        this.row.appendChild(select_col);
        this.target_table.appendChild(this.row);
    }

    setupResult(data) {
        if (!data["type"]) {
            this.result = [0, 0, 0];
        } else if (!data["choice"]) {
            this.result = [data["base_L"], data["base_G"], data["base_C"]];
        } else {
            // initially, the selected index is default to 0
            let additional_r = data["choice"][0];
            this.result = [data["base_L"] + additional_r["L"], data["base_G"] + additional_r["G"], data["base_C"] + additional_r["C"]];
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

    onCheckerChanged(data) {
        if (this.checker.checked) {
            // this event is completed
            console.log("checked");
            if (this.selector) {
                let additional_r = data["choice"][this.selected_val];
                this.result = [data["base_L"] + additional_r["L"], data["base_G"] + additional_r["G"], data["base_C"] + additional_r["C"]];
            } else {
                this.result = [data["base_L"], data["base_G"], data["base_C"]];
            }
        } else {
            this.result = [0, 0, 0];
        }
        this.law_col.innerText = this.result[0];
        this.gray_col.innerText = this.result[1];
        this.chaos_col.innerText = this.result[2];
    }

    onSelectorChanged(data) {
        this.selected_val = this.selector.options.selectedIndex;
        let additional_r = data["choice"][this.selected_val];
        if (this.checker.checked) {
            this.result = [data["base_L"] + additional_r["L"], data["base_G"] + additional_r["G"], data["base_C"] + additional_r["C"]];
            this.law_col.innerText = this.result[0];
            this.gray_col.innerText = this.result[1];
            this.chaos_col.innerText = this.result[2];
        }
    }

    getResult() {
        return this.result;
    }
}

let all_event_data_before_5 = [];
let total_val = [];

let all_event_data_after_5 = [];
let total_val2 = [];
// 1：协会，2：黑月，3：结社，4：斑鸠，0：未选择
let selected_partner = 0;

function getLevel(target_exp_arr, actual_val) {
    for (let i = 0; i < target_exp_arr.length; i++) {
        if (actual_val < target_exp_arr[i]) {
            return i;
        }
    }
    return target_exp_arr.length;
}

function calculateSumBefore5() {
    let law = 0;
    let gray = 0;
    let chaos = 0;
    for (let ed of all_event_data_before_5) {
        let r = ed.getResult();
        console.log(r);
        law += r[0];
        gray += r[1];
        chaos += r[2];
    }
    return [law, gray, chaos]
}

function setVal1() {
    console.log("set value clicked");
    total_val = calculateSumBefore5();
    law_result_field1.innerText = total_val[0] + " (LV" + getLevel(law_level_values, total_val[0]) + ")";
    gray_result_field1.innerText = total_val[1] + " (LV" + getLevel(gray_level_values, total_val[1]) + ")";
    chaos_result_field1.innerText = total_val[2] + " (LV" + getLevel(chaos_level_values, total_val[2]) + ")";
    selected_partner = 0;
    setupAfter5();
}

function calculateSumAll() {
    let law = 0;
    let gray = 0;
    let chaos = 0;
    for (let ed of all_event_data_before_5) {
        let r = ed.getResult();
        console.log(r);
        law += r[0];
        gray += r[1];
        chaos += r[2];
    }

    for (let ed of all_event_data_after_5) {
        let r = ed.getResult();
        console.log(r);
        law += r[0];
        gray += r[1];
        chaos += r[2];
    }
    return [law, gray, chaos]
}

function setVal2() {
    console.log("set value 2 clicked");
    total_val2 = calculateSumAll();
    law_result_field2.innerText = total_val2[0] + " (LV" + getLevel(law_level_values, total_val2[0]) + ")";
    gray_result_field2.innerText = total_val2[1] + " (LV" + getLevel(gray_level_values, total_val2[1]) + ")";
    chaos_result_field2.innerText = total_val2[2] + " (LV" + getLevel(chaos_level_values, total_val2[2]) + ")";
}

function checkPartnerAvailable() {
    let law_level = getLevel(law_level_values, total_val[0]);
    let gray_level = getLevel(gray_level_values, total_val[1]);
    let chaos_level = getLevel(chaos_level_values, total_val[2]);
    if (law_level < 3 
        && gray_level < 3
        && chaos_level < 3
        && law_level + chaos_level < 5) {
            return false;
        }
    return true;
}

function setupPartnerSelector(partner_selector) {
    let law_level = getLevel(law_level_values, total_val[0]);
    let gray_level = getLevel(gray_level_values, total_val[1]);
    let chaos_level = getLevel(chaos_level_values, total_val[2]);

    if (law_level >= 3) {
        let opt = document.createElement("option");
        opt.value = 1;
        opt.innerText = "协会";
        partner_selector.appendChild(opt);
    }

    if (gray_level >= 3) {
        let opt = document.createElement("option");
        opt.value = 2;
        opt.innerText = "黑月";
        partner_selector.appendChild(opt);
    }

    if (chaos_level >= 3) {
        let opt = document.createElement("option");
        opt.value = 3;
        opt.innerText = "结社";
        partner_selector.appendChild(opt);
    }

    if (law_level + chaos_level >= 5) {
        let opt = document.createElement("option");
        opt.value = 4;
        opt.innerText = "斑鸠";
        partner_selector.appendChild(opt);
    }
}

function setupTableAfter5() {
    console.log("选择了 " + selected_partner);
    let table2 = document.getElementById("table2");
    if (!table2) {
        table2 = document.createElement("table");
        table2.id = "table2";
        div_after_5.appendChild(table2);
    } else {
        table2.querySelectorAll('*').forEach(n => n.remove());
        all_event_data_after_5 = [];
    }
    let table_caption = document.createElement("caption");
    table_caption.innerText = "第五章及后续事件完成度及选项";
    table2.appendChild(table_caption);

    let table_body = document.createElement("tbody");
    table2.appendChild(table_body);

    let header_row = document.createElement("tr");
    header_row.innerHTML = "<th>章节</th><th>事件名</th><th>完成？</th><th>选择</th><th>实际获得LAW</th><th>实际获得GRAY</th><th>实际获得CHAOS</th>";
    table2.appendChild(header_row);

    if (selected_partner == 1) {
        //协会
        for (let i = 0; i < data_5_guild.length; i++) {
            all_event_data_after_5.push(new EventData(data_5_guild[i], table2));
        }
        for (let i = 0; i < data_final.length; i++) {
            all_event_data_after_5.push(new EventData(data_final[i], table2));
        }
    } else if (selected_partner > 0) {
        for (let i = 0; i < data_5_other.length; i++) {
            all_event_data_after_5.push(new EventData(data_5_other[i], table2));
        }
        for (let i = 0; i < data_final.length; i++) {
            all_event_data_after_5.push(new EventData(data_final[i], table2));
        }
    }
}

function setupAfter5() {

    div_after_5.querySelectorAll('*').forEach(n => n.remove());
    
    let intro_div = document.createElement("div");
    intro_div.innerText = "请选择第五章合作实力。\n注：此处可选择的势力会根据之前的选项及LGC进行变化！如果需要改变选择，请做出选择后再次点击下方确定按钮。";
    div_after_5.appendChild(intro_div);

    if (!checkPartnerAvailable()) {
        intro_div.innerText = "LGC点数均不足，无法推进";
        return;
    }

    let partner_selector = document.createElement("select");

    setupPartnerSelector(partner_selector);
    
    partner_selector.addEventListener("change", ()=>{
        let selected_idx = partner_selector.options.selectedIndex;
        selected_partner = partner_selector.options[selected_idx].value;
    });
    if (partner_selector.children.length > 0 ){
        selected_partner = partner_selector.options[0].value;
    }
    div_after_5.appendChild(partner_selector);

    let button = document.createElement("button");
    button.innerText = "确认选择";
    button.addEventListener("click", ()=>setupTableAfter5());
    div_after_5.appendChild(button);
}


button1.addEventListener("click", setVal1);
button2.addEventListener("click", setVal2);

for (let i = 0; i < data_before_5.length; i++) {
    all_event_data_before_5.push(new EventData(data_before_5[i], table1));
}

const nodes_before_5 = [];
const nodes_5_guild = [];
const nodes_5_other = [];
const nodes_final = [];

function setupNodes(data_arr, node_arr) {
    for (let i = 0; i < data_arr.length; i++) {
        let curr_item = [];
        node_arr.push(curr_item);
        if (data_arr[i]["choice"]) {
            for (let c of data_arr[i]["choice"]) {
                curr_item.push([data_arr[i]["base_L"] + c["L"], data_arr[i]["base_G"] + c["G"], data_arr[i]["base_C"] + c["C"]]);
            }
        } else {
            curr_item.push([data_arr[i]["base_L"], data_arr[i]["base_G"], data_arr[i]["base_C"]]);
        }
    }
}

setupNodes(data_before_5, nodes_before_5);
setupNodes(data_5_guild, nodes_5_guild);
setupNodes(data_5_other, nodes_5_other);
setupNodes(data_final, nodes_final);

const potential_sums = [];

for (let i = 0; i < nodes_before_5[0].length; i++) {
    potential_sums.push(nodes_before_5[0][i]);
} 

for (let i = 1; i < nodes_before_5.length; i++) {
    let tmp = [];
    while (potential_sums.length > 0) {
        tmp.push(potential_sums.shift());
    }
    for (let j = 0; j < tmp.length; j++) {
        for (let k = 0; k < nodes_before_5[i].length; k++) {
            potential_sums.push([tmp[j][0] + nodes_before_5[i][k][0], tmp[j][1] + nodes_before_5[i][k][1],tmp[j][2] + nodes_before_5[i][k][2]]);
        }
    }
}

for (let i = 0; i < potential_sums.length; i++) {
    potential_sums[i] = JSON.stringify(potential_sums[i]);
}

let s = new Set(potential_sums);
console.log(s.size);
