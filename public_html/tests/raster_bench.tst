do control.settings.loop.set(false)
not control.settings.loop.get()
do control.settings.glwant.set(false)
not control.settings.glwant.get()
do view.ctrl.resize(800,600)
do $("#examples_button").click()
sleep 1
is $("#examples").is(":visible")
== $("#example_HILLS\\.amber03").length 1
do $("#example_HILLS\\.amber03").click()
not compute.sum_hill.haveData()
sleep 1
wait compute.sum_hill.haveData()
== compute.sum_hill.nbody 25000
wait draw.drawer.isInited()
is draw.raster.isInited()
do control.settings.measure.set(false)

do control.settings.resol.set(64)
do control.settings.speed.set(0.01)
bench start 3000
do control.settings.play.set(true)
bench manage.manager.counter 3450
# resize=9000->17000 firebug(100->90) JSLint(100->340)
do control.settings.play.set(false)

do control.settings.resol.set(512)
do control.settings.speed.set(10)
bench start 3000
do control.settings.play.set(true)
bench manage.manager.lastSpace.ratio 1355000
# resize=4M->4M8 firebug(100->50)  JSLint(100->250)
do control.settings.play.set(false)

do control.control.reset()
