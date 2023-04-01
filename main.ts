player.onChat("刷石机32", function () {
    for (let index = 0; index < 32; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        loops.pause(60)
    }
})
player.onChat("挖矿16", function () {
    for (let index = 0; index < 16; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(FORWARD, 1)
        agent.destroy(UP)
        agent.collectAll()
    }
})
player.onChat("tpc", function () {
    agent.teleportToPlayer()
})
player.onChat("tpsc", function () {
    player.execute(
    "tp @s @c"
    )
})
player.onChat("挖矿32", function () {
    for (let index = 0; index < 32; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(FORWARD, 1)
        agent.destroy(UP)
        agent.collectAll()
    }
})
player.onChat("挖矿128", function () {
    for (let index = 0; index < 128; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(FORWARD, 1)
        agent.destroy(UP)
        agent.collectAll()
    }
})
player.onChat("刷石机16", function () {
    for (let index = 0; index < 16; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        loops.pause(60)
    }
})
player.onChat("ai右", function () {
    agent.turn(RIGHT_TURN)
})
player.onChat("挖矿64", function () {
    for (let index = 0; index < 64; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(FORWARD, 1)
        agent.destroy(UP)
        agent.collectAll()
    }
})
player.onChat("ai左", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("flyfalse", function () {
    player.execute(
    "ability @s mayfly false"
    )
})
player.onChat("flytrue", function () {
    player.execute(
    "ability @s mayfly true"
    )
})
player.onChat("刷石机128", function () {
    for (let index = 0; index < 128; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        loops.pause(60)
    }
})
player.onChat("刷石机64", function () {
    for (let index = 0; index < 64; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        loops.pause(60)
    }
})
player.say("运行成功！欢迎使用mcyangtuocode！具体用途和聊天指令请查看代码内容和自行测试")
player.say("提示：你可以自定义此代码参数来自定义您的游戏体验或者将这条提醒删除避免烦人")
