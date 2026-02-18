gdjs.Level2Code = {};
gdjs.Level2Code.localVariables = [];
gdjs.Level2Code.idToCallbackMap = new Map();
gdjs.Level2Code.GDNewSpriteObjects1= [];
gdjs.Level2Code.GDNewSpriteObjects2= [];
gdjs.Level2Code.GDNewSpriteObjects3= [];
gdjs.Level2Code.GDfinishObjects1= [];
gdjs.Level2Code.GDfinishObjects2= [];
gdjs.Level2Code.GDfinishObjects3= [];
gdjs.Level2Code.GDendObjects1= [];
gdjs.Level2Code.GDendObjects2= [];
gdjs.Level2Code.GDendObjects3= [];
gdjs.Level2Code.GDPlayerplatObjects1= [];
gdjs.Level2Code.GDPlayerplatObjects2= [];
gdjs.Level2Code.GDPlayerplatObjects3= [];
gdjs.Level2Code.GDCoinObjects1= [];
gdjs.Level2Code.GDCoinObjects2= [];
gdjs.Level2Code.GDCoinObjects3= [];
gdjs.Level2Code.GDNewTiledSprite3Objects1= [];
gdjs.Level2Code.GDNewTiledSprite3Objects2= [];
gdjs.Level2Code.GDNewTiledSprite3Objects3= [];
gdjs.Level2Code.GDDoorObjects1= [];
gdjs.Level2Code.GDDoorObjects2= [];
gdjs.Level2Code.GDDoorObjects3= [];
gdjs.Level2Code.GDCheckpoint_95952Objects1= [];
gdjs.Level2Code.GDCheckpoint_95952Objects2= [];
gdjs.Level2Code.GDCheckpoint_95952Objects3= [];
gdjs.Level2Code.GDCoinTextObjects1= [];
gdjs.Level2Code.GDCoinTextObjects2= [];
gdjs.Level2Code.GDCoinTextObjects3= [];
gdjs.Level2Code.GDFadeObjects1= [];
gdjs.Level2Code.GDFadeObjects2= [];
gdjs.Level2Code.GDFadeObjects3= [];
gdjs.Level2Code.GDkillObjects1= [];
gdjs.Level2Code.GDkillObjects2= [];
gdjs.Level2Code.GDkillObjects3= [];
gdjs.Level2Code.GDDisappearPlatformObjects1= [];
gdjs.Level2Code.GDDisappearPlatformObjects2= [];
gdjs.Level2Code.GDDisappearPlatformObjects3= [];


gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level2Code.GDPlayerplatObjects1, gdjs.Level2Code.GDPlayerplatObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerplatObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects2[k] = gdjs.Level2Code.GDPlayerplatObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerplatObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(gdjs.Level2Code.GDPlayerplatObjects1, gdjs.Level2Code.GDPlayerplatObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerplatObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects2[k] = gdjs.Level2Code.GDPlayerplatObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerplatObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
{
elseEventsChainSatisfied = true;
}

}


};gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects = Hashtable.newFrom({"Playerplat": gdjs.Level2Code.GDPlayerplatObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDkillObjects1Objects = Hashtable.newFrom({"kill": gdjs.Level2Code.GDkillObjects1});
gdjs.Level2Code.asyncCallback14512532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects2);

{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects2[i].setX(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects2[i].setCenterYInScene(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
gdjs.Level2Code.localVariables.length = 0;
}
gdjs.Level2Code.idToCallbackMap.set(14512532, gdjs.Level2Code.asyncCallback14512532);
gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level2Code.localVariables);
for (const obj of gdjs.Level2Code.GDPlayerplatObjects1) asyncObjectsList.addObject("Playerplat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level2Code.asyncCallback14512532(runtimeScene, asyncObjectsList)), 14512532, asyncObjectsList);
}
}

}


};gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects = Hashtable.newFrom({"Playerplat": gdjs.Level2Code.GDPlayerplatObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDCheckpoint_959595952Objects1Objects = Hashtable.newFrom({"Checkpoint_2": gdjs.Level2Code.GDCheckpoint_95952Objects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects = Hashtable.newFrom({"Playerplat": gdjs.Level2Code.GDPlayerplatObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level2Code.GDCoinObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects = Hashtable.newFrom({"Playerplat": gdjs.Level2Code.GDPlayerplatObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level2Code.GDDoorObjects1});
gdjs.Level2Code.asyncCallback14523972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Door"), gdjs.Level2Code.GDDoorObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects2);

{for(var i = 0, len = gdjs.Level2Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDDoorObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level1");
}
gdjs.Level2Code.localVariables.length = 0;
}
gdjs.Level2Code.idToCallbackMap.set(14523972, gdjs.Level2Code.asyncCallback14523972);
gdjs.Level2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level2Code.localVariables);
for (const obj of gdjs.Level2Code.GDDoorObjects1) asyncObjectsList.addObject("Door", obj);
for (const obj of gdjs.Level2Code.GDPlayerplatObjects1) asyncObjectsList.addObject("Playerplat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level2Code.asyncCallback14523972(runtimeScene, asyncObjectsList)), 14523972, asyncObjectsList);
}
}

}


};gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects = Hashtable.newFrom({"Playerplat": gdjs.Level2Code.GDPlayerplatObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.Level2Code.GDendObjects1});
gdjs.Level2Code.asyncCallback10152044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level2Code.GDFadeObjects2);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}
{for(var i = 0, len = gdjs.Level2Code.GDFadeObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Fade", 300, "linear", 1, false);
}
}
gdjs.Level2Code.localVariables.length = 0;
}
gdjs.Level2Code.idToCallbackMap.set(10152044, gdjs.Level2Code.asyncCallback10152044);
gdjs.Level2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Level2Code.asyncCallback10152044(runtimeScene, asyncObjectsList)), 10152044, asyncObjectsList);
}
}

}


};gdjs.Level2Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level2Code.GDFadeObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Unfade", 0, "linear", 5, false);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").getAnimationName() == "Hurt") ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects1[k] = gdjs.Level2Code.GDPlayerplatObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerplatObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}

{ //Subevents
gdjs.Level2Code.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects1[k] = gdjs.Level2Code.GDPlayerplatObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects1[k] = gdjs.Level2Code.GDPlayerplatObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").getAnimationName() == "Hurt") ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects1[k] = gdjs.Level2Code.GDPlayerplatObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerplatObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Flippable").flipX(true);
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Flippable").flipX(false);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);
gdjs.copyArray(runtimeScene.getObjects("kill"), gdjs.Level2Code.GDkillObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDkillObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Health").IsDamageCooldownActive(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects1[k] = gdjs.Level2Code.GDPlayerplatObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerplatObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Health").Hit(10, true, true, null);
}
}
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Health").TriggerDamageCooldown(null);
}
}
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}

{ //Subevents
gdjs.Level2Code.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerplatObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerplatObjects1[k] = gdjs.Level2Code.GDPlayerplatObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerplatObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerplatObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint_2"), gdjs.Level2Code.GDCheckpoint_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDCheckpoint_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDCheckpoint_95952Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Level2Code.GDCheckpoint_95952Objects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCheckpoint_95952Objects1[0].getPointX("")));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Level2Code.GDCheckpoint_95952Objects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCheckpoint_95952Objects1[0].getPointY("")));
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level2Code.GDDisappearPlatformObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDisappearPlatformObjects1[i].resetTimer("Timer");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level2Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDDisappearPlatformObjects1[k] = gdjs.Level2Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDisappearPlatformObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level2Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDisappearPlatformObjects1[i].activateBehavior("Platform", false);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level2Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") <= 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDDisappearPlatformObjects1[k] = gdjs.Level2Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDisappearPlatformObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level2Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDisappearPlatformObjects1[i].activateBehavior("Platform", true);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level2Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") >= 4 ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDDisappearPlatformObjects1[k] = gdjs.Level2Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDisappearPlatformObjects1[i].resetTimer("Timer");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level2Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Level2Code.GDCoinTextObjects1);
/* Reuse gdjs.Level2Code.GDPlayerplatObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").setAnimationName("Eat");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Level2Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCoinTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Level2Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCoinTextObjects1[i].setFontName("b6fd0cb2a1206afe3882f0187839aac780734a091c5e6c57ee25c84acdc1a499_Kenney Blocks.ttf");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level2Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level2Code.GDFadeObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fading", 255, "linear", 1, false);
}
}

{ //Subevents
gdjs.Level2Code.eventsList2(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playerplat"), gdjs.Level2Code.GDPlayerplatObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.Level2Code.GDendObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerplatObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDendObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerplatObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("Animation").setAnimationName("Win");
}
}
{for(var i = 0, len = gdjs.Level2Code.GDPlayerplatObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerplatObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}

{ //Subevents
gdjs.Level2Code.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDNewSpriteObjects1.length = 0;
gdjs.Level2Code.GDNewSpriteObjects2.length = 0;
gdjs.Level2Code.GDNewSpriteObjects3.length = 0;
gdjs.Level2Code.GDfinishObjects1.length = 0;
gdjs.Level2Code.GDfinishObjects2.length = 0;
gdjs.Level2Code.GDfinishObjects3.length = 0;
gdjs.Level2Code.GDendObjects1.length = 0;
gdjs.Level2Code.GDendObjects2.length = 0;
gdjs.Level2Code.GDendObjects3.length = 0;
gdjs.Level2Code.GDPlayerplatObjects1.length = 0;
gdjs.Level2Code.GDPlayerplatObjects2.length = 0;
gdjs.Level2Code.GDPlayerplatObjects3.length = 0;
gdjs.Level2Code.GDCoinObjects1.length = 0;
gdjs.Level2Code.GDCoinObjects2.length = 0;
gdjs.Level2Code.GDCoinObjects3.length = 0;
gdjs.Level2Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.Level2Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.Level2Code.GDNewTiledSprite3Objects3.length = 0;
gdjs.Level2Code.GDDoorObjects1.length = 0;
gdjs.Level2Code.GDDoorObjects2.length = 0;
gdjs.Level2Code.GDDoorObjects3.length = 0;
gdjs.Level2Code.GDCheckpoint_95952Objects1.length = 0;
gdjs.Level2Code.GDCheckpoint_95952Objects2.length = 0;
gdjs.Level2Code.GDCheckpoint_95952Objects3.length = 0;
gdjs.Level2Code.GDCoinTextObjects1.length = 0;
gdjs.Level2Code.GDCoinTextObjects2.length = 0;
gdjs.Level2Code.GDCoinTextObjects3.length = 0;
gdjs.Level2Code.GDFadeObjects1.length = 0;
gdjs.Level2Code.GDFadeObjects2.length = 0;
gdjs.Level2Code.GDFadeObjects3.length = 0;
gdjs.Level2Code.GDkillObjects1.length = 0;
gdjs.Level2Code.GDkillObjects2.length = 0;
gdjs.Level2Code.GDkillObjects3.length = 0;
gdjs.Level2Code.GDDisappearPlatformObjects1.length = 0;
gdjs.Level2Code.GDDisappearPlatformObjects2.length = 0;
gdjs.Level2Code.GDDisappearPlatformObjects3.length = 0;

gdjs.Level2Code.eventsList4(runtimeScene);
gdjs.Level2Code.GDNewSpriteObjects1.length = 0;
gdjs.Level2Code.GDNewSpriteObjects2.length = 0;
gdjs.Level2Code.GDNewSpriteObjects3.length = 0;
gdjs.Level2Code.GDfinishObjects1.length = 0;
gdjs.Level2Code.GDfinishObjects2.length = 0;
gdjs.Level2Code.GDfinishObjects3.length = 0;
gdjs.Level2Code.GDendObjects1.length = 0;
gdjs.Level2Code.GDendObjects2.length = 0;
gdjs.Level2Code.GDendObjects3.length = 0;
gdjs.Level2Code.GDPlayerplatObjects1.length = 0;
gdjs.Level2Code.GDPlayerplatObjects2.length = 0;
gdjs.Level2Code.GDPlayerplatObjects3.length = 0;
gdjs.Level2Code.GDCoinObjects1.length = 0;
gdjs.Level2Code.GDCoinObjects2.length = 0;
gdjs.Level2Code.GDCoinObjects3.length = 0;
gdjs.Level2Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.Level2Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.Level2Code.GDNewTiledSprite3Objects3.length = 0;
gdjs.Level2Code.GDDoorObjects1.length = 0;
gdjs.Level2Code.GDDoorObjects2.length = 0;
gdjs.Level2Code.GDDoorObjects3.length = 0;
gdjs.Level2Code.GDCheckpoint_95952Objects1.length = 0;
gdjs.Level2Code.GDCheckpoint_95952Objects2.length = 0;
gdjs.Level2Code.GDCheckpoint_95952Objects3.length = 0;
gdjs.Level2Code.GDCoinTextObjects1.length = 0;
gdjs.Level2Code.GDCoinTextObjects2.length = 0;
gdjs.Level2Code.GDCoinTextObjects3.length = 0;
gdjs.Level2Code.GDFadeObjects1.length = 0;
gdjs.Level2Code.GDFadeObjects2.length = 0;
gdjs.Level2Code.GDFadeObjects3.length = 0;
gdjs.Level2Code.GDkillObjects1.length = 0;
gdjs.Level2Code.GDkillObjects2.length = 0;
gdjs.Level2Code.GDkillObjects3.length = 0;
gdjs.Level2Code.GDDisappearPlatformObjects1.length = 0;
gdjs.Level2Code.GDDisappearPlatformObjects2.length = 0;
gdjs.Level2Code.GDDisappearPlatformObjects3.length = 0;


return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
