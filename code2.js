gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.idToCallbackMap = new Map();
gdjs.EndCode.GDNewTiledSpriteObjects1= [];
gdjs.EndCode.GDNewTiledSpriteObjects2= [];
gdjs.EndCode.GDPlayerplatObjects1= [];
gdjs.EndCode.GDPlayerplatObjects2= [];
gdjs.EndCode.GDCoinObjects1= [];
gdjs.EndCode.GDCoinObjects2= [];
gdjs.EndCode.GDNewTiledSprite3Objects1= [];
gdjs.EndCode.GDNewTiledSprite3Objects2= [];
gdjs.EndCode.GDDoorObjects1= [];
gdjs.EndCode.GDDoorObjects2= [];
gdjs.EndCode.GDCheckpoint_95952Objects1= [];
gdjs.EndCode.GDCheckpoint_95952Objects2= [];
gdjs.EndCode.GDCoinTextObjects1= [];
gdjs.EndCode.GDCoinTextObjects2= [];
gdjs.EndCode.GDFadeObjects1= [];
gdjs.EndCode.GDFadeObjects2= [];
gdjs.EndCode.GDkillObjects1= [];
gdjs.EndCode.GDkillObjects2= [];
gdjs.EndCode.GDDisappearPlatformObjects1= [];
gdjs.EndCode.GDDisappearPlatformObjects2= [];


gdjs.EndCode.asyncCallback9533004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndCode.localVariables);
gdjs.EndCode.localVariables.length = 0;
}
gdjs.EndCode.idToCallbackMap.set(9533004, gdjs.EndCode.asyncCallback9533004);
gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(30), (runtimeScene) => (gdjs.EndCode.asyncCallback9533004(runtimeScene, asyncObjectsList)), 9533004, asyncObjectsList);
}
}

}


};gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.EndCode.GDFadeObjects1);
{for(var i = 0, len = gdjs.EndCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("unfade", 0, "linear", 5, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "07783a237ed6ea7b3f0ca4e6cfd4a75c909ede8ec9a80158612a7b334f5990cb_Evil Incoming.aac", false, 100, 1);
}

{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
{
elseEventsChainSatisfied = true;
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.EndCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.EndCode.GDPlayerplatObjects1.length = 0;
gdjs.EndCode.GDPlayerplatObjects2.length = 0;
gdjs.EndCode.GDCoinObjects1.length = 0;
gdjs.EndCode.GDCoinObjects2.length = 0;
gdjs.EndCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.EndCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.EndCode.GDDoorObjects1.length = 0;
gdjs.EndCode.GDDoorObjects2.length = 0;
gdjs.EndCode.GDCheckpoint_95952Objects1.length = 0;
gdjs.EndCode.GDCheckpoint_95952Objects2.length = 0;
gdjs.EndCode.GDCoinTextObjects1.length = 0;
gdjs.EndCode.GDCoinTextObjects2.length = 0;
gdjs.EndCode.GDFadeObjects1.length = 0;
gdjs.EndCode.GDFadeObjects2.length = 0;
gdjs.EndCode.GDkillObjects1.length = 0;
gdjs.EndCode.GDkillObjects2.length = 0;
gdjs.EndCode.GDDisappearPlatformObjects1.length = 0;
gdjs.EndCode.GDDisappearPlatformObjects2.length = 0;

gdjs.EndCode.eventsList1(runtimeScene);
gdjs.EndCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.EndCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.EndCode.GDPlayerplatObjects1.length = 0;
gdjs.EndCode.GDPlayerplatObjects2.length = 0;
gdjs.EndCode.GDCoinObjects1.length = 0;
gdjs.EndCode.GDCoinObjects2.length = 0;
gdjs.EndCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.EndCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.EndCode.GDDoorObjects1.length = 0;
gdjs.EndCode.GDDoorObjects2.length = 0;
gdjs.EndCode.GDCheckpoint_95952Objects1.length = 0;
gdjs.EndCode.GDCheckpoint_95952Objects2.length = 0;
gdjs.EndCode.GDCoinTextObjects1.length = 0;
gdjs.EndCode.GDCoinTextObjects2.length = 0;
gdjs.EndCode.GDFadeObjects1.length = 0;
gdjs.EndCode.GDFadeObjects2.length = 0;
gdjs.EndCode.GDkillObjects1.length = 0;
gdjs.EndCode.GDkillObjects2.length = 0;
gdjs.EndCode.GDDisappearPlatformObjects1.length = 0;
gdjs.EndCode.GDDisappearPlatformObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
