<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 30.01.2018
 * Time: 12:48
 */
require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
header('Content-Type: text/html; charset=utf8');
function exceptionFinish($msg){ //В этой функции помимо завршения сцения могут производится какие-то дополнительные работы, такие, как логирование например.
    die($msg);
}
function sendEmail($to, $subj, $msg, $id = null){
    //Отправка письма, под id может предполагаться шаблон письма в таком случае msg может быть массивом данных
}

foreach (array('sale') as $module) {
    if (!CModule::IncludeModule($module))
        exceptionFinish('Не был подключен модуль - ' . $module);
}

$filter = array("!=GROUPS_ID" => Array(1));//Не администраторы
$rsUsers = CUser::GetList(($by = "NAME"), ($order = "desc"), $filter);
while ($arUser = $rsUsers->Fetch()) {
    $baskRes = CSaleBasket::GetList(array('NAME' => 'ASC', 'ID' => 'ASC'), array(
        'USER_ID' => $arUser['ID'],
        'DELAY' => 'Y',
        '>=DATE_UPDATE' => date($DB->DateFormatToPHP(CSite::GetDateFormat("FULL")), strtotime(' -30 days'))
    ));
    $whishList = array();
    while ($baskItem = $baskRes->Fetch()) {
        if (CSaleOrder::GetList(array('ID' => 'DESC'), array('USER_ID' => $arUser['ID'], 'BASKET_PRODUCT_ID' => $baskItem['PRODUCT_ID']))->fetch()) continue; //Этот товар был куплен
        $whishList[] = $baskItem['NAME'];
    }
    if ($whishList) {
        $msg = 'Добрый день, ' . $arUser['NAME'] . ' В вашем вишлисте хранятся товары: "' . implode('", "', $whishList) . '".';
        sendEmail($arUser['EMAIL'], 'Уведомление об отложенных товарах.', $msg);
    }
}


require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/epilog_after.php');