// ==UserScript==
// @name         Mediabase Request for Slumber Party
// @version      0.1
// @description  Slumber Party slays lives.
// @author       Shinko
// @match        http://www.mediabase.com/mmrweb/*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

var url = window.location.toString();
var index = url.indexOf('&');
var code = url.substr(index+7 , 4);
var city,
    zipCode;
var OCNJArr=['07712'],
    ACNJArr=['08401'],
    PONYArr=['12601'],
    NLCTArr=['06320'],
    FWBFLArr=['32544'],
    TUMSArr=['38804'],
    KEWAArr=['99336'],
    CCMAArr=['02468'],
    TCMIArr=['49684'],
    MEORArr=['97501'],
    WIVAArr=['22601'],
    BAMEArr=['04401'],
    ELNYArr=['14901'],
    JOMOArr=['64801'],
    BLILArr=['61701'],
    DUIAArr=['52001'],
    WAIAArr=['50701'],
    HAVAArr=['22801'],
    RCSDArr=['57701'],
    BINDArr=['58501'],
    GFNDArr=['58201'],
    CAWYArr=['82601'],
    MATXArr=['78501','78502','78503','78504','78505'],
    FMFLArr=['33901','33907','33911','33912','33916'],
    HOHIArr=['96802','96813','96817','96822','96834'],
    WBPAArr=['18701','18702','18705','18711','18767'],
    MOCAArr=['93940','93942','93943','93944','93950'],
    GRNCArr=['27833','27834','27834','27836','27858'],
    DBFLArr=['32114','32117','32118','32119','32124'],
    MEFLArr=['32901','32905','32934','32935','32940'],
    JCTNArr=['37604','37614','37615','37659','37694'],
    LALAArr=['70501','70503','70506','70507','70508'],
    AUGAArr=['30901','30903','30904','30905','30906'],
    MOCAArr=['95350','95351','95354','95355','95356'],
    LAPAArr=['17601','17602','17603','17604','17605'],
    ROVAArr=['24011','24013','24014','24016','24017'],
    NHCTArr=['06510','06511','06515','06517','06519'],
    PONHArr=['03801','03802','03803','03804','03805'],
    SRCAArr=['95401','95403','95404','95405','95407'],
    FCCOArr=['80521','80524','80525','80526','80528'],
    LAMIArr=['48906','48910','48911','48912','48915'],
    YOOHArr=['44502','44503','44504','44506','44507'],
    FLMIArr=['48502','48503','48507','48532','48551'],
    PSCAArr=['92259','92262','92263','92264','92292'],
    FAARArr=['72701','72702','72703','72704','72727'],
    SAMIArr=['48602','48604','48606','48607','48638'],
    APWIArr=['54136','54911','54913','54914','54915'],
    SPMOArr=['65757','65803','65804','65806','65809'],
    BUVTArr=['05401','05402','05405','05406','05408'],
    SAMDArr=['21801','21802','21803','21804','21875'],
    TRNJArr=['08608','08609','08610','08611','08618'],
    TYTXArr=['75701','75702','75704','75708','75709'],
    EUORArr=['97401','97402','97403','97404','97405'],
    DAIAArr=['52801','52802','52803','52804','52806'],
    ROILArr=['61088','61101','61102','61104','61107'],
    BIMSArr=['39503','39507','39530','39531','39532'],
    MBSCArr=['29568','29572','29575','29577','29578'],
    SAGAArr=['31401','31404','31405','31406','31415'],
    HUWVArr=['25701','25702','25703','25704','25705'],
    WINCArr=['28401','28403','28405','28409','28412'],
    EVINArr=['47708','47712','47713','47714','47715'],
    UTNYArr=['13501','13502','13503','13504','13505'],
    HAMDArr=['21740','21741','21742','21746','21747'],
    POMEArr=['04019','04050','04101','04102','04103'],
    SLOCAArr=['93401','93403','93405','93406','93407'],
    CONHArr=['03301','03302','03303','03304','03305'],
    FSARArr=['72901','72903','72904','72908','72916'],
    MOWVArr=['26501','26502','26504','26505','26506'],
    NBMAArr=['02740','02742','02744','02745','02746'],
    SBINArr=['46601','46615','46616','46619','46628'],
    ODTXArr=['79761','79762','79763','79764','79766'],
    BINYArr=['13901','13902','13903','13904','13905'],
    COGAArr=['31901','31903','31904','31906','31907'],
    DOALArr=['36601','36602','36305','36345','36350'],
    WATXArr=['76701','76704','76707','76710','76798'],
    YAWAArr=['98901','98902','98903','98904','98907'],
    LATXArr=['78040','78041','78043','78045','78046'],
    SMCAArr=['93454','03455','03456','93457','93458'],
    THINArr=['47801','47802','47803','47804','47805'],
    CPILArr=['61820','61821','61822','61824','61825'],
    FLSCArr=['29501','29502','29505','29506','29541'],
    SCMNArr=['56303','56304','56374','56379','56387'],
    ALLAArr=['71301','71302','71303','71306','71409'],
    LCLAArr=['70601','70605','70607','70615','70669'],
    ROMNArr=['55901','55902','55904','55906','55976'],
    BRTXArr=['77801','77802','77803','77807','77808'],
    LAINArr=['47901','47902','47904','47905','47909'],
    PCFLArr=['32401','32404','32405','32408','32409'],
    ABTXArr=['79563','79601','79602','79603','79605'],
    COMOArr=['65201','65202','65203','65205','65206'],
    MOLAArr=['71201','71202','71203','71209','71210'],
    BIMTArr=['59101','59102','59105','59106','59108'],
    ALGAArr=['31701','31704','31705','31707','31721'],
    SATXArr=['76901','76903','76904','76905','76908'],
    NYNYArr=['10001','10006','10011','10018','10029','10037','10048','10075'],
    LACAArr=['90001','90004','90011','90015','90023','90042','90069','90077'],
    CHILArr=['60606','60607','60611','60623','60641','60647','60659','60673'],
    SFCAArr=['94111','94117','94124','94127','94129','94131','94134','94145'],
    SUNYArr=['11930','11701','11931','11933','11944','11778','11967','11776'],
    RICAArr=['92501','92503','92504','92505','92506','92507','92508','92522'],
    PRRIArr=['02902','02903','02904','02906','02908','02911','02912','02919'],
    WPBFLArr=['33401','33405','33407','33409','33411','33412','33417','33422'],
    HACTArr=['06095','06103','06105','06106','06110','06112','06114','06160'],
    LOKYArr=['40202','40203','40204','40206','40209','40212','40214','40258'],
    RIVAArr=['23173','23219','23220','23221','23224','23226','23230','23232'],
    GRMIArr=['49501','49502','49503','49504','49505','49507','49534','49544'],
    ALPAArr=['18052','18101','18102','18103','18104','18105','18109','18195'],
    WIDEArr=['19801','19802','19803','19805','19806','19809','19810','19891'],
    HAPAArr=['17101','17102','17103','17104','17110','17111','17120','17177'],
    GAFLArr=['32601','32603','32605','32606','32607','32608','32609','32612'],
    STCAArr=['95202','95203','95204','95205','95206','95207','95209','95210'],
    SYNYArr=['13202','13203','13207','13210','13214','13215','13224','13290'],
    DMIAArr=['50309','50310','50311','50312','50314','50315','50316','50319'],
    SPWAArr=['99026','99201','99202','99203','99204','99205','99207','99223'],
    TOOHArr=['43604','43607','43608','43609','43610','43612','43613','43620'],
    LEKYArr=['40502','40503','40504','40505','40506','40507','40508','40509'],
    VECAArr=['93001','93002','93003','93004','93005','93006','93007','93009'],
    RENVArr=['89431','89433','89501','89502','89503','89509','89512','89519'],
    FANCArr=['28301','28303','28304','28305','28306','28307','28308','28310'],
    SHLAArr=['71047','71101','71103','71104','71105','71106','71108','71109'],
    BETXArr=['77627','77701','77702','77703','77705','77706','77707','77708'],
    PEILArr=['61528','61602','61603','61606','61614','61615','61616','61625'],
    MAGAArr=['31201','31204','31206','31207','31210','31211','31213','31217'],
    ASNCArr=['28704','28715','28732','28801','28803','28804','28805','28806'],
    TAFLArr=['32301','32303','32304','32305','32308','32309','32310','32311'],
    ERPAArr=['16501','16502','16503','16504','16505','16506','16507','16508'],
    CHWVArr=['25301','25303','25304','25305','25306','25309','25311','25312'],
    KAMIArr=['49001','49002','49006','49007','49008','49009','49024','49074'],
    CRIAArr=['52227','52228','52233','52302','52324','52328','52338','52401'],
    DATXArr=['75001','75006','75007','75019','75032','75039','75041','75043','75050','75051','75052','75060'],
    HOTXArr=['77023','77046','77068','77069','77070','77071','77072','77073','77074','77075','77076','77077'],
    ATGAArr=['30314','30315','30316','30317','30318','30324','30325','30326','30327','30331','30334','30336'],
    PHPAArr=['19119','19136','19137','19138','19139','19140','19141','19142','19143','19144','19145','19146'],
    WADCArr=['20002','20009','20010','20011','20012','20015','20016','20017','20018','20019','20020','20024'],
    BOMAArr=['02111','02113','02114','02128','02129','20120','02130','02131','02132','02134','02135','02136'],
    DEMIArr=['48206','48215','48216','48217','48219','48221','48223','48224','48225','48226','48227','48260'],
    MIFLArr=['33101','33125','33127','33128','33129','33130','33131','33132','33133','33136','33137','33139'],
    SEWAArr=['98109','98112','98115','98116','98117','98118','98119','98121','98122','98125','98126','98198'],
    PHAZArr=['85003','85004','85006','85007','85008','85012','85013','85014','85015','85017','85019','85085'],
    MIMNArr=['55401','55403','55404','55407','55408','55409','55412','55413','55414','55415','55417','55455'],
    SDCAArr=['92110','92111','92113','92114','92116','92117','92119','92122','92123','92124','92126','92129'],
    TAFLArr=['33602','33603','33605','33606','33607','33609','33611','33615','33616','33620','33621','33633'],
    DECOArr=['80208','80209','80210','80211','80214','80219','80224','80226','80227','80230','80232','80236'],
    SLMOArr=['63101','63102','63103','63104','63106','63107','63108','63109','63110','63111','63112','63136'],
    BAMDArr=['21201','21202','21205','21206','21207','21208','21209','21210','21211','21212','21213','21214'],
    POORArr=['97201','97203','97204','97205','97208','97209','97210','97211','97212','97213','97214','97272'],
    CHNCArr=['28078','28105','28134','28202','28203','28204','28205','28206','28207','28208','28209','28282'],
    PIPAArr=['15201','15203','15206','15207','15208','15211','15212','15213','15214','15217','15219','15251'],
    SACAArr=['94249','95814','95815','95816','95817','95818','95819','95822','95833','95834','95835','95837'],
    CIOHArr=['45202','45203','45204','45205','45206','45207','45208','45209','45212','45214','45216','45254'],
    CLOHArr=['44101','44103','44104','44105','44106','44107','44111','44112','44113','44114','44115','44117'],
    SLCUTArr=['84101','84102','84103','84104','84105','84111','84112','84113','84115','84116','84119','84148'],
    SATXArr=['78056','78073','78202','78203','78204','78205','78207','78208','78210','78211','78214','78287'],
    KCMOArr=['64081','64082','64101','64102','64105','64106','64108','64109','64110','64111','64112','64146'],
    LVNVArr=['89030','89101','89102','89104','89106','89107','89108','89109','89110','89117','89128','89193'],
    ORFLArr=['32801','32803','32804','32805','32806','32811','32812','32814','32819','32822','32827','32828'],
    SJCAArr=['94089','95002','95013','95050','95054','95110','95111','95112','95113','95116','95118','95151'],
    COOHArr=['43002','43004','43016','43017','43026','43035','43054','43065','43081','43082','43085','43234'],
    MIWIArr=['53154','53202','53203','53204','53205','53206','53207','53208','53210','53211','53213','53235'],
    AUTXArr=['78610','78613','78617','78641','78652','78653','78660','78664','78681','78701','78702','78778'],
    ININArr=['46113','46183','46201','46202','46204','46205','46208','46214','46217','46218','46219','46220'],
    NOVAArr=['23502','23503','23504','23505','23507','23508','23509','23510','23511','23513','23517','23523'],
    NATNArr=['37115','37203','37207','37211','37215','37219','37224','37230','37236','37237','37242','37249'],
    GRNCArr=['27214','27235','27282','27301','27313','27358','27401','27403','27405','27407','27408','27427'],
    JAFLArr=['32202','32204','32205','32206','32207','32208','32209','32210','32211','32212','32216','32223'],
    OCOKArr=['73078','73097','73099','73102','73103','73104','73105','73106','73107','73108','73109','73137'],
    METNArr=['38018','38103','38104','38105','38106','38107','38108','38109','38111','38112','38114','38138'],
    NOLAArr=['70112','70113','70114','70115','70116','70117','70118','70119','70122','70123','70124','70125'],
    BUNYArr=['14201','14202','14203','14204','14206','14207','14208','14209','14210','14211','14212','14241'],
    RONYArr=['14604','14605','14607','14608','14611','14612','14613','14614','14615','14616','14619','14646'],
    BIALArr=['35061','35064','35068','35094','35117','35126','35127','35203','35204','35205','35206','35253'],
    GRSCArr=['29601','29602','29604','29607','29609','29610','29612','29614','29615','29616','29617','29698'],
    TUAZArr=['85701','85706','85707','85708','85710','85711','85714','85719','85723','85724','85726','85757'],
    DAOHArr=['45377','45402','45403','45404','45405','45406','45409','45410','45414','45416','45417','45454'],
    ALNYArr=['12201','12202','12203','12204','12205','12206','12207','12208','12209','12210','12211','12222'],
    TUOKArr=['74103','74104','74105','74106','74110','74112','74114','74115','74119','74120','74128','74147'],
    FRCAArr=['93650','93701','93702','93703','93704','93705','93710','93711','93721','93722','93726','93737'],
    ALNMArr=['87048','87102','87104','87105','87106','87107','87108','87109','87110','87111','87112','87187'],
    KNTNArr=['37849','37871','37902','37909','37912','37914','37915','37916','37917','37918','37919','37997'],
    OMNEArr=['68022','68102','68104','68105','68106','68107','68108','68110','68111','68112','68114','68116'],
    EPTXArr=['79901','79902','79903','79904','79905','79906','79907','79908','79911','79912','79915','79920'],
    BACAArr=['93220','93301','93304','93305','93306','93307','93308','93309','93311','93312','93313','93314'],
    AKOHArr=['44203','44221','44223','44260','44278','44301','44302','44303','44304','44305','44306','44307'],
    LRARArr=['72103','72201','72202','72204','72205','72206','72207','72209','72210','72211','72212','72221'],
    SPMAArr=['01103','01104','01105','01107','01108','01109','01118','01119','01128','01129','01151','01199'],
    COSCArr=['29044','29045','29061','29063','29147','29202','29203','29204','29205','29207','29208','29210'],
    CSCOArr=['80829','80831','80903','80904','80905','80906','80907','80909','80910','80911','80914','80917'],
    MOALArr=['36575','36602','36603','36604','36605','36606','36607','36608','36609','36613','36615','36617'],
    WIKSArr=['67202','67203','67209','67211','67212','67213','67214','67215','67218','67228','67235','67260'],
    MAWIArr=['53562','53590','53597','53703','53704','53705','53706','53714','53715','53716','53717','53726'],
    BOIDArr=['83616','83634','83642','83646','83702','83703','83704','83705','83706','83709','83712','83713'],
    CHTNArr=['37341','37343','37350','37351','37377','37379','37402','37403','37404','37405','37406','37407'],
    HUALArr=['35649','35741','35757','35758','35759','35763','35801','35802','35803','35805','35806','35808'],
    FWINArr=['46774','46802','46803','46804','46805','46806','46807','46808','46809','46814','46815','46816'],
    WOMAArr=['01545','01583','01602','01603','01604','01605','01606','01607','01608','01609','01610','01614'],
    JAMSArr=['39157','39174','39201','39202','39203','39204','39206','39211','39216','39217','39269','39271'],
    CAOHArr=['44641','44702','44703','44704','44705','44706','44707','44708','44709','44710','44714','44718'],
    CCTXArr=['78370','78373','78374','78401','78402','78404','78405','78406','78407','78408','78409','78410'],
    MOALArr=['36043','36064','36104','36105','36106','36107','36108','36109','36110','36111','36112','36113'],
    LINEArr=['68430','68502','68503','68504','68505','68506','68507','68508','68510','68512','68514','68516'],
    ANAKArr=['99501','99502','99503','99504','99505','99506','99507','99508','99513','99515','99516','99517'],
    LUTXArr=['79382','79401','79403','79406','79407','79410','79411','79412','79413','79414','79415','79416'],
    AMTXArr=['79101','79102','79103','79104','79106','79107','79108','79109','79110','79111','79118','79119'];

var o = Math.floor(Math.random() * OCNJArr.length + 1)-1;
var k = Math.floor(Math.random() * MATXArr.length + 1)-1;
var n = Math.floor(Math.random() * NYNYArr.length + 1)-1;
var m = Math.floor(Math.random() * DATXArr.length + 1)-1;
var OCNJChoose= OCNJArr[o],
    ACNJChoose= ACNJArr[o],
    PONYChoose= PONYArr[o],
    NLCTChoose= NLCTArr[o],
    FWBFLChoose= FWBFLArr[o],
    TUMSChoose= TUMSArr[o],
    KEWAChoose= KEWAArr[o],
    CCMAChoose= CCMAArr[o],
    TCMIChoose= TCMIArr[o],
    MEORChoose= MEORArr[o],
    WIVAChoose= WIVAArr[o],
    BAMEChoose= BAMEArr[o],
    ELNYChoose= ELNYArr[o],
    JOMOChoose= JOMOArr[o],
    BLILChoose= BLILArr[o],
    DUIAChoose= DUIAArr[o],
    WAIAChoose= WAIAArr[o],
    HAVAChoose= HAVAArr[o],
    RCSDChoose= RCSDArr[o],
    BINDChoose= BINDArr[o],
    GFNDChoose= GFNDArr[o],
    CAWYChoose= CAWYArr[o],
    MATXChoose= MATXArr[k],
    FMFLChoose= FMFLArr[k],
    HOHIChoose= HOHIArr[k],
    WBPAChoose= WBPAArr[k],
    MOCAChoose= MOCAArr[k],
    GRNCChoose= GRNCArr[k],
    DBFLChoose= DBFLArr[k],
    MEFLChoose= MEFLArr[k],
    JCTNChoose= JCTNArr[k],
    LALAChoose= LALAArr[k],
    AUGAChoose= AUGAArr[k],
    MOCAChoose= MOCAArr[k],
    LAPAChoose= LAPAArr[k],
    ROVAChoose= ROVAArr[k],
    NHCTChoose= NHCTArr[k],
    PONHChoose= PONHArr[k],
    SRCAChoose= SRCAArr[k],
    FCCOChoose= FCCOArr[k],
    LAMIChoose= LAMIArr[k],
    YOOHChoose= YOOHArr[k],
    FLMIChoose= FLMIArr[k],
    PSCAChoose= PSCAArr[k],
    FAARChoose= FAARArr[k],
    SAMIChoose= SAMIArr[k],
    APWIChoose= APWIArr[k],
    SPMOChoose= SPMOArr[k],
    BUVTChoose= BUVTArr[k],
    SAMDChoose= SAMDArr[k],
    TRNJChoose= TRNJArr[k],
    TYTXChoose= TYTXArr[k],
    EUORChoose= EUORArr[k],
    DAIAChoose= DAIAArr[k],
    ROILChoose= ROILArr[k],
    BIMSChoose= BIMSArr[k],
    MBSCChoose= MBSCArr[k],
    SAGAChoose= SAGAArr[k],
    HUWVChoose= HUWVArr[k],
    WINCChoose= WINCArr[k],
    EVINChoose= EVINArr[k],
    UTNYChoose= UTNYArr[k],
    HAMDChoose= HAMDArr[k],
    POMEChoose= POMEArr[k],
    SLOCAChoose= SLOCAArr[k],
    CONHChoose= CONHArr[k],
    FSARChoose= FSARArr[k],
    MOWVChoose= MOWVArr[k],
    NBMAChoose= NBMAArr[k],
    SBINChoose= SBINArr[k],
    ODTXChoose= ODTXArr[k],
    BINYChoose= BINYArr[k],
    COGAChoose= COGAArr[k],
    DOALChoose= DOALArr[k],
    WATXChoose= WATXArr[k],
    YAWAChoose= YAWAArr[k],
    LATXChoose= LATXArr[k],
    SMCAChoose= SMCAArr[k],
    THINChoose= THINArr[k],
    CPILChoose= CPILArr[k],
    FLSCChoose= FLSCArr[k],
    SCMNChoose= SCMNArr[k],
    ALLAChoose= ALLAArr[k],
    LCLAChoose= LCLAArr[k],
    ROMNChoose= ROMNArr[k],
    BRTXChoose= BRTXArr[k],
    LAINChoose= LAINArr[k],
    PCFLChoose= PCFLArr[k],
    ABTXChoose= ABTXArr[k],
    COMOChoose= COMOArr[k],
    MOLAChoose= MOLAArr[k],
    BIMTChoose= BIMTArr[k],
    ALGAChoose= ALGAArr[k],
    SATXChoose= SATXArr[k],
    NYNYChoose= NYNYArr[n],
    LACAChoose= LACAArr[n],
    CHILChoose= CHILArr[n],
    SFCAChoose= SFCAArr[n],
    SUNYChoose= SUNYArr[n],
    RICAChoose= RICAArr[n],
    PRRIChoose= PRRIArr[n],
    WPBFLChoose= WPBFLArr[n],
    HACTChoose= HACTArr[n],
    LOKYChoose= LOKYArr[n],
    RIVAChoose= RIVAArr[n],
    GRMIChoose= GRMIArr[n],
    ALPAChoose= ALPAArr[n],
    WIDEChoose= WIDEArr[n],
    HAPAChoose= HAPAArr[n],
    GAFLChoose= GAFLArr[n],
    STCAChoose= STCAArr[n],
    SYNYChoose= SYNYArr[n],
    DMIAChoose= DMIAArr[n],
    SPWAChoose= SPWAArr[n],
    TOOHChoose= TOOHArr[n],
    LEKYChoose= LEKYArr[n],
    VECAChoose= VECAArr[n],
    RENVChoose= RENVArr[n],
    FANCChoose= FANCArr[n],
    SHLAChoose= SHLAArr[n],
    BETXChoose= BETXArr[n],
    PEILChoose= PEILArr[n],
    MAGAChoose= MAGAArr[n],
    ASNCChoose= ASNCArr[n],
    TAFLChoose= TAFLArr[n],
    ERPAChoose= ERPAArr[n],
    CHWVChoose= CHWVArr[n],
    KAMIChoose= KAMIArr[n],
    CRIAChoose= CRIAArr[n],
    DATXChoose= DATXArr[m],
    HOTXChoose= HOTXArr[m],
    ATGAChoose= ATGAArr[m],
    PHPAChoose= PHPAArr[m],
    WADCChoose= WADCArr[m],
    BOMAChoose= BOMAArr[m],
    DEMIChoose= DEMIArr[m],
    MIFLChoose= MIFLArr[m],
    SEWAChoose= SEWAArr[m],
    PHAZChoose= PHAZArr[m],
    MIMNChoose= MIMNArr[m],
    SDCAChoose= SDCAArr[m],
    TAFLChoose= TAFLArr[m],
    DECOChoose= DECOArr[m],
    SLMOChoose= SLMOArr[m],
    BAMDChoose= BAMDArr[m],
    POORChoose= POORArr[m],
    CHNCChoose= CHNCArr[m],
    PIPAChoose= PIPAArr[m],
    SACAChoose= SACAArr[m],
    CIOHChoose= CIOHArr[m],
    CLOHChoose= CLOHArr[m],
    SLCUTChoose= SLCUTArr[m],
    SATXChoose= SATXArr[m],
    KCMOChoose= KCMOArr[m],
    LVNVChoose= LVNVArr[m],
    ORFLChoose= ORFLArr[m],
    SJCAChoose= SJCAArr[m],
    COOHChoose= COOHArr[m],
    MIWIChoose= MIWIArr[m],
    AUTXChoose= AUTXArr[m],
    ININChoose= ININArr[m],
    NOVAChoose= NOVAArr[m],
    NATNChoose= NATNArr[m],
    GRNCChoose= GRNCArr[m],
    JAFLChoose= JAFLArr[m],
    OCOKChoose= OCOKArr[m],
    METNChoose= METNArr[m],
    NOLAChoose= NOLAArr[m],
    BUNYChoose= BUNYArr[m],
    RONYChoose= RONYArr[m],
    BIALChoose= BIALArr[m],
    GRSCChoose= GRSCArr[m],
    TUAZChoose= TUAZArr[m],
    DAOHChoose= DAOHArr[m],
    ALNYChoose= ALNYArr[m],
    TUOKChoose= TUOKArr[m],
    FRCAChoose= FRCAArr[m],
    ALNMChoose= ALNMArr[m],
    KNTNChoose= KNTNArr[m],
    OMNEChoose= OMNEArr[m],
    EPTXChoose= EPTXArr[m],
    BACAChoose= BACAArr[m],
    AKOHChoose= AKOHArr[m],
    LRARChoose= LRARArr[m],
    SPMAChoose= SPMAArr[m],
    COSCChoose= COSCArr[m],
    CSCOChoose= CSCOArr[m],
    MOALChoose= MOALArr[m],
    WIKSChoose= WIKSArr[m],
    MAWIChoose= MAWIArr[m],
    BOIDChoose= BOIDArr[m],
    CHTNChoose= CHTNArr[m],
    HUALChoose= HUALArr[m],
    FWINChoose= FWINArr[m],
    WOMAChoose= WOMAArr[m],
    JAMSChoose= JAMSArr[m],
    CAOHChoose= CAOHArr[m],
    CCTXChoose= CCTXArr[m],
    MOALChoose= MOALArr[m],
    LINEChoose= LINEArr[m],
    ANAKChoose= ANAKArr[m],
    LUTXChoose= LUTXArr[m],
    AMTXChoose= AMTXArr[m],
    PHPAChoose= PHPAArr[m];
switch (code) {
  case 'WHTZ':
    city = 'New York, NY';
    zipCode = NYNYChoose;
    break;
  case 'WXRK':
    city = 'New York, NY';
    zipCode = NYNYChoose;
    break;
  case 'WPLJ':
    city = 'New York, NY';
    zipCode = NYNYChoose;
    break;
  case 'WQHT':
    city = 'New York, NY';
    zipCode = NYNYChoose;
    break;
  case 'WKTU':
    city = 'New York, NY';
    zipCode = NYNYChoose;
    break;
  case 'KIIS':
    city = 'Los Angeles, CA';
    zipCode = LACAChoose;
    break;
  case 'KAMP':
    city = 'Los Angeles, CA';
    zipCode = LACAChoose;
    break;
  case 'KBIG':
    city = 'Los Angeles, CA';
    zipCode = LACAChoose;
    break;
  case 'KPWR':
    city = 'Los Angeles, CA';
    zipCode = LACAChoose;
    break;
  case 'WKSC':
    city = 'Chicago, IL';
    zipCode = CHILChoose;
    break;
  case 'WTMX':
    city = 'Chicago, IL';
    zipCode = CHILChoose;
    break;
  case 'WBBM':
    city = 'Chicago, IL';
    zipCode = CHILChoose;
    break;
  case 'KMVQ':
    city = 'San Francisco, CA';
    zipCode = SFCAChoose;
    break;
  case 'KIOI':
    city = 'San Francisco, CA';
    zipCode = SFCAChoose;
    break;
  case 'KLLC':
    city = 'San Francisco, CA';
    zipCode = SFCAChoose;
    break;
  case 'KMEL':
    city = 'San Francisco, CA';
    zipCode = SFCAChoose;
    break;
  case 'KYLD':
    city = 'San Francisco, CA';
    zipCode = SFCAChoose;
    break;
  case 'KHKS':
    city = 'Dallas, TX';
    zipCode = DATXChoose;
    break;
  case 'KLIF':
    city = 'Dallas, TX';
    zipCode = DATXChoose;
    break;
  case 'KDMX':
    city = 'Dallas, TX';
    zipCode = DATXChoose;
    break;
  case 'KBFB':
    city = 'Dallas, TX';
    zipCode = DATXChoose;
    break;
  case 'KKHH':
    city = 'Houston, TX';
    zipCode = HOTXChoose;
    break;
  case 'KRBE':
    city = 'Houston, TX';
    zipCode = HOTXChoose;
    break;
  case 'KHMX':
    city = 'Houston, TX';
    zipCode = HOTXChoose;
    break;
  case 'KBXX':
    city = 'Houston, TX';
    zipCode = HOTXChoose;
    break;
  case 'WSTR':
    city = 'Atlanta, GA';
    zipCode = ATGAChoose;
    break;
  case 'WWWQ':
    city = 'Atlanta, GA';
    zipCode = ATGAChoose;
    break;
  case 'WIOQ':
    city = 'Philadelphia, PA';
    zipCode = PHPAChoose;
    break;
  case 'WRDW':
    city = 'Philadelphia, PA';
    zipCode = PHPAChoose;
    break;
  case 'WIHT':
    city = 'Washington, DC';
    zipCode = WADCChoose;
    break;
  case 'WRQX':
    city = 'Washington, DC';
    zipCode = WADCChoose;
    break;
  case 'WPGC':
    city = 'Washington, DC';
    zipCode = WADCChoose;
    break;
  case 'WXKS':
    city = 'Boston, MA';
    zipCode = BOMAChoose;
    break;
  case 'WBMX':
    city = 'Boston, MA';
    zipCode = BOMAChoose;
    break;
  case 'WJMN':
    city = 'Boston, MA';
    zipCode = BOMAChoose;
    break;
  case 'WDZH':
    city = 'Detroit, MI';
    zipCode = DEMIChoose;
    break;
  case 'WKQI':
    city = 'Detroit, MI';
    zipCode = DEMIChoose;
    break;
  case 'WDVD':
    city = 'Detroit, MI';
    zipCode = DEMIChoose;
    break;
  case 'WHYI':
    city = 'Miami, FL';
    zipCode = MIFLChoose;
    break;
  case 'WPOW':
    city = 'Miami, FL';
    zipCode = MIFLChoose;
    break;
  case 'KBKS':
    city = 'Seattle, WA';
    zipCode = SEWAChoose;
    break;
  case 'KPLZ':
    city = 'Seattle, WA';
    zipCode = SEWAChoose;
    break;
  case 'KUBE':
    city = 'Seattle, WA';
    zipCode = SEWAChoose;
    break;
  case 'KMVA':
    city = 'Phoenix, AZ';
    zipCode = PHAZChoose;
    break;
  case 'KZZP':
    city = 'Phoenix, AZ';
    zipCode = PHAZChoose;
    break;
  case 'KMXP':
    city = 'Phoenix, AZ';
    zipCode = PHAZChoose;
    break;
  case 'KZON':
    city = 'Phoenix, AZ';
    zipCode = PHAZChoose;
    break;
  case 'KKFR':
    city = 'Phoenix, AZ';
    zipCode = PHAZChoose;
    break;
  case 'KDWB':
    city = 'Minneapolis, MN';
    zipCode = MIMNChoose;
    break;
  case 'KSTP':
    city = 'Minneapolis, MN';
    zipCode = MIMNChoose;
    break;
  case 'KHTC':
    city = 'Minneapolis, MN';
    zipCode = MIMNChoose;
    break;
  case 'KHTS':
    city = 'San Diego, CA';
    zipCode = SDCAChoose;
    break;
  case 'KMYI':
    city = 'San Diego, CA';
    zipCode = SDCAChoose;
    break;
  case 'KSCF':
    city = 'San Diego, CA';
    zipCode = SDCAChoose;
    break;
  case 'XHTZ':
    city = 'San Diego, CA';
    zipCode = SDCAChoose;
    break;
  case 'WBLI':
    city = 'Suffolk, NY';
    zipCode = SUNYChoose;
    break;
  case 'WPTY':
    city = 'Suffolk, NY';
    zipCode = SUNYChoose;
    break;
  case 'WFLZ':
    city = 'Tampa, FL';
    zipCode = TAFLChoose;
    break;
  case 'WMTX':
    city = 'Tampa, FL';
    zipCode = TAFLChoose;
    break;
  case 'WLLD':
    city = 'Tampa, FL';
    zipCode = TAFLChoose;
    break;
  case 'KDHT':
    city = 'Denver, CO';
    zipCode = DECOChoose;
    break;
  case 'KALC':
    city = 'Denver, CO';
    zipCode = DECOChoose;
    break;
  case 'KIMN':
    city = 'Denver, CO';
    zipCode = DECOChoose;
    break;
  case 'KQKS':
    city = 'Denver, CO';
    zipCode = DECOChoose;
    break;
  case 'KSLZ':
    city = 'St. Louis, MO';
    zipCode = SLMOChoose;
    break;
  case 'KYKY':
    city = 'St. Louis, MO';
    zipCode = SLMOChoose;
    break;
  case 'WWMX':
    city = 'Baltimore, MD';
    zipCode = BAMDChoose;
    break;
  case 'WZFT':
    city = 'Baltimore, MD';
    zipCode = BAMDChoose;
    break;
  case 'KRSK':
    city = 'Portland, OR';
    zipCode = POORChoose;
    break;
  case 'KKRZ':
    city = 'Portland, OR';
    zipCode = POORChoose;
    break;
  case 'WNKS':
    city = 'Charlotte, NC';
    zipCode = CHNCChoose;
    break;
  case 'WIBT':
    city = 'Charlotte, NC';
    zipCode = CHNCChoose;
    break;
  case 'WKST':
    city = 'Pittsburgh, PA';
    zipCode = PIPAChoose;
    break;
  case 'WZPT':
    city = 'Pittsburgh, PA';
    zipCode = PIPAChoose;
    break;
  case 'WLTJ':
    city = 'Pittsburgh, PA';
    zipCode = PIPAChoose;
    break;
  case 'KGGI':
    city = 'Riverside, CA';
    zipCode = '92522';
    break;
  case 'KDND':
    city = 'Sacramento, CA';
    zipCode = SACAChoose;
    break;
  case 'KZZO':
    city = 'Sacramento, CA';
    zipCode = SACAChoose;
    break;
  case 'KHHM':
    city = 'Sacramento, CA';
    zipCode = SACAChoose;
    break;
  case 'KSFM':
    city = 'Sacramento, CA';
    zipCode = SACAChoose;
    break;
  case 'WKFS':
    city = 'Cincinnati, OH';
    zipCode = CIOHChoose;
    break;
  case 'WKRQ':
    city = 'Cincinnati, OH';
    zipCode = CIOHChoose;
    break;
  case 'WQAL':
    city = 'Cincinnati, OH';
    zipCode = CIOHChoose;
    break;
  case 'WAKS':
    city = 'Cleveland, OH';
    zipCode = CLOHChoose;
    break;
  case 'KUDD':
    city = 'Salt Lake City, UT';
    zipCode = SLCUTChoose;
    break;
  case 'KZHT':
    city = 'Salt Lake City, UT';
    zipCode = SLCUTChoose;
    break;
  case 'KJMY':
    city = 'Salt Lake City, UT';
    zipCode = SLCUTChoose;
    break;
  case 'KUUU':
    city = 'Salt Lake City, UT';
    zipCode = SLCUTChoose;
    break;
  case 'KTFM':
    city = 'San Antonio, TX';
    zipCode = SATXChoose;
    break;
  case 'KXXM':
    city = 'San Antonio, TX';
    zipCode = SATXChoose;
    break;
  case 'KBBT':
    city = 'San Antonio, TX';
    zipCode = SATXChoose;
    break;
  case 'KCHZ':
    city = 'Kansas City, MO';
    zipCode = KCMOChoose;
    break;
  case 'KMXV':
    city = 'Kansas City, MO';
    zipCode = KCMOChoose;
    break;
  case 'KFRH':
    city = 'Las Vegas, NV';
    zipCode = LVNVChoose;
    break;
  case 'KMXB':
    city = 'Las Vegas, NV';
    zipCode = LVNVChoose;
    break;
  case 'KVEG':
    city = 'Las Vegas, NV';
    zipCode = LVNVChoose;
    break;
  case 'KLUC':
    city = 'Las Vegas, NV';
    zipCode = LVNVChoose;
    break;
  case 'WXXL':
    city = 'Orlando, FL';
    zipCode = ORFLChoose;
    break;
  case 'WOMX':
    city = 'Orlando, FL';
    zipCode = ORFLChoose;
    break;
  case 'WJHM':
    city = 'Orlando, FL';
    zipCode = ORFLChoose;
    break;
  case 'WPYO':
    city = 'Orlando, FL';
    zipCode = ORFLChoose;
    break;
  case 'KEZR':
    city = 'San Jose, CA';
    zipCode = SJCAChoose;
    break;
  case 'WNCI':
    city = 'Columbus, OH';
    zipCode = COOHChoose;
    break;
  case 'WVMX':
    city = 'Columbus, OH';
    zipCode = COOHChoose;
    break;
  case 'WCKX':
    city = 'Columbus, OH';
    zipCode = COOHChoose;
    break;
  case 'WXSS':
    city = 'Milwaukee, WI';
    zipCode = MIWIChoose;
    break;
  case 'WMYX':
    city = 'Milwaukee, WI';
    zipCode = MIWIChoose;
    break;
  case 'KHFI':
    city = 'Austin, TX';
    zipCode = AUTXChoose;
    break;
  case 'KAMX':
    city = 'Austin, TX';
    zipCode = AUTXChoose;
    break;
  case 'KPEZ':
    city = 'Austin, TX';
    zipCode = AUTXChoose;
    break;
  case 'WNOU':
    city = 'Indianapolis, IN';
    zipCode = ININChoose;
    break;
  case 'WZPL':
    city = 'Indianapolis, IN';
    zipCode = ININChoose;
    break;
  case 'WHHH':
    city = 'Indianapolis, IN';
    zipCode = ININChoose;
    break;
  case 'WPRO':
    city = 'Providence, RI';
    zipCode = PRRIChoose;
    break;
  case 'WWKX':
    city = 'Providence, RI';
    zipCode = PRRIChoose;
    break;
  case 'WVHT':
    city = 'Norfolk, VA';
    zipCode = NOVAChoose;
    break;
  case 'WPTE':
    city = 'Norfolk, VA';
    zipCode = NOVAChoose;
    break;
  case 'WNVZ':
    city = 'Norfolk, VA';
    zipCode = NOVAChoose;
    break;
  case 'WRVW':
    city = 'Nashville, TN';
    zipCode = NATNChoose;
    break;
  case 'WPRT':
    city = 'Nashville, TN';
    zipCode = NATNChoose;
    break;
  case 'WKZL':
    city = 'Greensboro, NC';
    zipCode = GRNCChoose;
    break;
  case 'WMKS':
    city = 'Greensboro, NC';
    zipCode = GRNCChoose;
    break;
  case 'WJMH':
    city = 'Greensboro, NC';
    zipCode = GRNCChoose;
    break;
  case 'WAPE':
    city = 'Jacksonville, FL';
    zipCode = JAFLChoose;
    break;
  case 'WFKS':
    city = 'Jacksonville, FL';
    zipCode = JAFLChoose;
    break;
  case 'WLDI':
    city = 'West Palm Beach, FL';
    zipCode = WPBFLChoose;
    break;
  case 'WRMF':
    city = 'West Palm Beach, FL';
    zipCode = WPBFLChoose;
    break;
  case 'WMBX':
    city = 'West Palm Beach, FL';
    zipCode = WPBFLChoose;
    break;
  case 'KJYO':
    city = 'Oklahoma City, OK';
    zipCode = OCOKChoose;
    break;
  case 'KYIS':
    city = 'Oklahoma City, OK';
    zipCode = OCOKChoose;
    break;
  case 'KKWD':
    city = 'Oklahoma City, OK';
    zipCode = OCOKChoose;
    break;
  case 'WHBQ':
    city = 'Memphis, TN';
    zipCode = METNChoose;
    break;
  case '=WMC':
    city = 'Memphis, TN';
    zipCode = METNChoose;
    break;
  case 'KXHT':
    city = 'Memphis, TN';
    zipCode = METNChoose;
    break;
  case 'WKSS':
    city = 'Hartford, CT';
    zipCode = HACTChoose;
    break;
  case 'WTIC':
    city = 'Hartford, CT';
    zipCode = HACTChoose;
    break;
  case 'WZMX':
    city = 'Hartford, CT';
    zipCode = HACTChoose;
    break;
  case 'WJLK':
    city = 'Ocean, NJ';
    zipCode = OCNJChoose;
    break;
  case 'WEZB':
    city = 'New Orleans, LA';
    zipCode = NOLAChoose;
    break;
  case 'KKND':
    city = 'New Orleans, LA';
    zipCode = NOLAChoose;
    break;
  case 'WKSE':
    city = 'Buffalo, NY';
    zipCode = BUNYChoose;
    break;
  case 'WTSS':
    city = 'Buffalo, NY';
    zipCode = BUNYChoose;
    break;
  case 'WDJX':
    city = 'Louisville, KY';
    zipCode = LOKYChoose;
    break;
  case 'WNRW':
    city = 'Louisville, KY';
    zipCode = LOKYChoose;
    break;
  case 'WXMA':
    city = 'Louisville, KY';
    zipCode = LOKYChoose;
    break;
  case 'KHKZ':
    city = 'McAllen, TX';
    zipCode = MATXChoose;
    break;
  case 'KBFM':
    city = 'McAllen, TX';
    zipCode = MATXChoose;
    break;
  case 'WRVQ':
    city = 'Richmond, VA';
    zipCode = RIVAChoose;
    break;
  case 'WPXY':
    city = 'Rochester, NY';
    zipCode = RONYChoose;
    break;
  case 'WQEN':
    city = 'Birmingham, AL';
    zipCode = BIALChoose;
    break;
  case 'WBHJ':
    city = 'Birmingham, AL';
    zipCode = BIALChoose;
    break;
  case 'WFBC':
    city = 'Greenville, SC';
    zipCode = GRSCChoose;
    break;
  case 'WHZT':
    city = 'Greenville, SC';
    zipCode = GRSCChoose;
    break;
  case 'KRQQ':
    city = 'Tucson, AZ';
    zipCode = TUAZChoose;
    break;
  case 'KWMT':
    city = 'Tucson, AZ';
    zipCode = TUAZChoose;
    break;
  case 'KOHT':
    city = 'Tucson, AZ';
    zipCode = TUAZChoose;
    break;
  case 'WMMX':
    city = 'Dayton, OH';
    zipCode = DAOHChoose;
    break;
  case 'WDHT':
    city = 'Dayton, OH';
    zipCode = DAOHChoose;
    break;
  case 'WXKB':
    city = 'Fort Myers, FL';
    zipCode = FMFLChoose;
    break;
  case 'WINK':
    city = 'Fort Myers, FL';
    zipCode = FMFLChoose;
    break;
  case 'WSGL':
    city = 'Fort Myers, FL';
    zipCode = FMFLChoose;
    break;
  case 'WBTT':
    city = 'Fort Myers, FL';
    zipCode = FMFLChoose;
    break;
  case 'WFLY':
    city = 'Albany, NY';
    zipCode = ALNYChoose;
    break;
  case 'WRVE':
    city = 'Albany, NY';
    zipCode = ALNYChoose;
    break;
  case 'WAJZ':
    city = 'Albany, NY';
    zipCode = ALNYChoose;
    break;
  case 'WQMQ':
    city = 'Honolulu, HI';
    zipCode = HOHIChoose;
    break;
  case 'KUCD':
    city = 'Honolulu, HI';
    zipCode = HOHIChoose;
    break;
  case 'KIKI':
    city = 'Honolulu, HI';
    zipCode = HOHIChoose;
    break;
  case 'KDDB':
    city = 'Honolulu, HI';
    zipCode = HOHIChoose;
    break;
  case 'KPHW':
    city = 'Honolulu, HI';
    zipCode = HOHIChoose;
    break;
  case 'KHTT':
    city = 'Tulsa, OK';
    zipCode = TUOKChoose;
    break;
  case 'KTBT':
    city = 'Tulsa, OK';
    zipCode = TUOKChoose;
    break;
  case 'KALZ':
    city = 'Fresno, CA';
    zipCode = FRCAChoose;
    break;
  case 'KWYE':
    city = 'Fresno, CA';
    zipCode = FRCAChoose;
    break;
  case 'KBOS':
    city = 'Fresno, CA';
    zipCode = FRCAChoose;
    break;
  case 'KSEQ':
    city = 'Fresno, CA';
    zipCode = FRCAChoose;
    break;
  case 'WHTS':
    city = 'Grand Rapids, MI';
    zipCode = GRMIChoose;
    break;
  case 'WSNX':
    city = 'Grand Rapids, MI';
    zipCode = GRMIChoose;
    break;
  case 'WLHT':
    city = 'Grand Rapids, MI';
    zipCode = GRMIChoose;
    break;
  case 'KDLW':
    city = 'Albuquerque, NM';
    zipCode = ALNMChoose;
    break;
  case 'KKOB':
    city = 'Albuquerque, NM';
    zipCode = ALNMChoose;
    break;
  case 'KPEK':
    city = 'Albuquerque, NM';
    zipCode = ALNMChoose;
    break;
  case 'KAGM':
    city = 'Albuquerque, NM';
    zipCode = ALNMChoose;
    break;
  case 'KKSS':
    city = 'Albuquerque, NM';
    zipCode = ALNMChoose;
    break;
  case 'WAEB':
    city = 'Allentown, PA';
    zipCode = ALPAChoose;
    break;
  case 'WBHT':
    city = 'Wilkes-Barre, PA';
    zipCode = WBPAChoose;
    break;
  case 'WKRZ':
    city = 'Wilkes-Barre, PA';
    zipCode = WBPAChoose;
    break;
  case 'WWST':
    city = 'Knoxville, TN';
    zipCode = KNTNChoose;
    break;
  case 'WKHT':
    city = 'Knoxville, TN';
    zipCode = KNTNChoose;
    break;
  case 'KQCH':
    city = 'Omaha, NE';
    zipCode = OMNEChoose;
    break;
  case 'KQKQ':
    city = 'Omaha, NE';
    zipCode = OMNEChoose;
    break;
  case 'KSRZ':
    city = 'Omaha, NE';
    zipCode = OMNEChoose;
    break;
  case 'KOPW':
    city = 'Omaha, NE';
    zipCode = OMNEChoose;
    break;
  case 'KPRR':
    city = 'El Paso, TX';
    zipCode = EPTXChoose;
    break;
  case 'XHTO':
    city = 'El Paso, TX';
    zipCode = EPTXChoose;
    break;
  case 'KKXX':
    city = 'Bakersfield, CA';
    zipCode = BACAChoose;
    break;
  case 'KLLY':
    city = 'Bakersfield, CA';
    zipCode = BACAChoose;
    break;
  case 'KISV':
    city = 'Bakersfield, CA';
    zipCode = BACAChoose;
    break;
  case 'WKDD':
    city = 'Akron, OH';
    zipCode = AKOHChoose;
    break;
  case 'WSTW':
    city = 'Wilmington, DE';
    zipCode = WIDEChoose;
    break;
  case 'WHKF':
    city = 'Harrisburg, PA';
    zipCode = HAPAChoose;
    break;
  case 'WWKL':
    city = 'Harrisburg, PA';
    zipCode = HAPAChoose;
    break;
  case 'WNNK':
    city = 'Harrisburg, PA';
    zipCode = HAPAChoose;
    break;
  case 'KCDU':
    city = 'Monterey, CA';
    zipCode = MOCAChoose;
    break;
  case 'KDON':
    city = 'Monterey, CA';
    zipCode = MOCAChoose;
    break;
  case 'WYKS':
    city = 'Gainesville, FL';
    zipCode = GAFLChoose;
    break;
  case 'WTMG':
    city = 'Gainesville, FL';
    zipCode = GAFLChoose;
    break;
  case 'KWIN':
    city = 'Stockton, CA';
    zipCode = STCAChoose;
    break;
  case 'WWHT':
    city = 'Syracuse, NY';
    zipCode = SYNYChoose;
    break;
  case 'WNTQ':
    city = 'Syracuse, NY';
    zipCode = SYNYChoose;
    break;
  case 'KLAL':
    city = 'Little Rock, AR';
    zipCode = LRARChoose;
    break;
  case 'KURB':
    city = 'Little Rock, AR';
    zipCode = LRARChoose;
    break;
  case 'WERO':
    city = 'Greenville, NC';
    zipCode = GRNCChoose;
    break;
  case 'WVYB':
    city = 'Daytona Beach, FL';
    zipCode = DBFLChoose;
    break;
  case 'WHYN':
    city = 'Springfield, MA';
    zipCode = SPMAChoose;
    break;
  case 'WMAS':
    city = 'Springfield, MA';
    zipCode = SPMAChoose;
    break;
  case 'WNOK':
    city = 'Columbia, SC';
    zipCode = COSCChoose;
    break;
  case 'KKDM':
    city = 'Des Moines, IA';
    zipCode = DMIAChoose;
    break;
  case 'KPTL':
    city = 'Des Moines, IA';
    zipCode = DMIAChoose;
    break;
  case 'KSTZ':
    city = 'Des Moines, IA';
    zipCode = DMIAChoose;
    break;
  case 'KCDA':
    city = 'Spokane, WA';
    zipCode = SPWAChoose;
    break;
  case 'KZZU':
    city = 'Spokane, WA';
    zipCode = SPWAChoose;
    break;
  case 'WTWR':
    city = 'Toledo, OH';
    zipCode = TOOHChoose;
    break;
  case 'WVKS':
    city = 'Toledo, OH';
    zipCode = TOOHChoose;
    break;
  case 'WWWM':
    city = 'Toledo, OH';
    zipCode = TOOHChoose;
    break;
  case 'KKMG':
    city = 'Colorado Springs, CO';
    zipCode = CSCOChoose;
    break;
  case 'KVUU':
    city = 'Colorado Springs, CO';
    zipCode = CSCOChoose;
    break;
  case 'WABB':
    city = 'Mobile, AL';
    zipCode = MOALChoose;
    break;
  case 'WAOA':
    city = 'Melbourne, FL';
    zipCode = MEFLChoose;
    break;
  case 'WBVD':
    city = 'Melbourne, FL';
    zipCode = MEFLChoose;
    break;
  case 'KZCH':
    city = 'Wichita, KS';
    zipCode = WIKSChoose;
    break;
  case 'KFBZ':
    city = 'Wichita, KS';
    zipCode = WIKSChoose;
    break;
  case 'KDGS':
    city = 'Wichita, KS';
    zipCode = WIKSChoose;
    break;
  case 'WZEE':
    city = 'Madison, WI';
    zipCode = MAWIChoose;
    break;
  case 'WJQM':
    city = 'Madison, WI';
    zipCode = MAWIChoose;
    break;
  case 'KSAS':
    city = 'Boise, ID';
    zipCode = BOIDChoose;
    break;
  case 'KZMG':
    city = 'Boise, ID';
    zipCode = BOIDChoose;
    break;
  case 'KCIX':
    city = 'Boise, ID';
    zipCode = BOIDChoose;
    break;
  case 'KWYD':
    city = 'Boise, ID';
    zipCode = BOIDChoose;
    break;
  case 'WAEZ':
    city = 'Johnson City, TN';
    zipCode = JCTNChoose;
    break;
  case 'WXIS':
    city = 'Johnson City, TN';
    zipCode = JCTNChoose;
    break;
  case 'WCDA':
    city = 'Lexington, KY';
    zipCode = LEKYChoose;
    break;
  case 'WLTO':
    city = 'Lexington, KY';
    zipCode = LEKYChoose;
    break;
  case 'KSMB':
    city = 'Lafayette, LA';
    zipCode = LALAChoose;
    break;
  case 'KHXT':
    city = 'Lafayette, LA';
    zipCode = LALAChoose;
    break;
  case 'WDOD':
    city = 'Chattanooga, TN';
    zipCode = CHTNChoose;
    break;
  case 'WZYP':
    city = 'Huntsville, AL';
    zipCode = HUALChoose;
    break;
  case 'WAHR':
    city = 'Huntsville, AL';
    zipCode = HUALChoose;
    break;
  case 'WHWT':
    city = 'Huntsville, AL';
    zipCode = HUALChoose;
    break;
  case 'WAJI':
    city = 'Fort Wayne, IN';
    zipCode = FWINChoose;
    break;
  case 'WMEE':
    city = 'Fort Wayne, IN';
    zipCode = FWINChoose;
    break;
  case 'WNHT':
    city = 'Fort Wayne, IN';
    zipCode = FWINChoose;
    break;
  case 'WJFX':
    city = 'Fort Wayne, IN';
    zipCode = FWINChoose;
    break;
  case 'WHHD':
    city = 'Augusta, GA';
    zipCode = AUGAChoose;
    break;
  case 'KHOP':
    city = 'Modesto, CA';
    zipCode = MOCAChoose;
    break;
  case 'KOSO':
    city = 'Modesto, CA';
    zipCode = MOCAChoose;
    break;
  case 'KHTN':
    city = 'Modesto, CA';
    zipCode = MOCAChoose;
    break;
  case 'WLAN':
    city = 'Lancaster, PA';
    zipCode = LAPAChoose;
    break;
  case 'WXLK':
    city = 'Roanoke, VA';
    zipCode = ROVAChoose;
    break;
  case 'WJJS':
    city = 'Roanoke, VA';
    zipCode = ROVAChoose;
    break;
  case 'WXLO':
    city = 'Worcester, MA';
    zipCode = WOMAChoose;
    break;
  case 'WKCI':
    city = 'New Haven, CT';
    zipCode = NHCTChoose;
    break;
  case 'WERZ':
    city = 'Portsmouth, NH';
    zipCode = PONHChoose;
    break;
  case 'KBBY':
    city = 'Ventura, CA';
    zipCode = VECAChoose;
    break;
  case 'KFYV':
    city = 'Ventura, CA';
    zipCode = VECAChoose;
    break;
  case 'KCAQ':
    city = 'Ventura, CA';
    zipCode = VECAChoose;
    break;
  case 'KVYB':
    city = 'Ventura, CA';
    zipCode = VECAChoose;
    break;
  case 'WSXY':
    city = 'Santa Rosa, CA';
    zipCode = SRCAChoose;
    break;
  case 'KMHX':
    city = 'Santa Rosa, CA';
    zipCode = SRCAChoose;
    break;
  case 'KSME':
    city = 'Fort Collins, CO';
    zipCode = FCCOChoose;
    break;
  case 'KKPL':
    city = 'Fort Collins, CO';
    zipCode = FCCOChoose;
    break;
  case 'KWNZ':
    city = 'Reno, NV';
    zipCode = RENVChoose;
    break;
  case 'KWYL':
    city = 'Reno, NV';
    zipCode = RENVChoose;
    break;
  case 'WYOY':
    city = 'Jackson, MS';
    zipCode = JAMSChoose;
    break;
  case 'WJIM':
    city = 'Lansing, MI';
    zipCode = LAMIChoose;
    break;
  case 'WHOT':
    city = 'Youngstown, OH';
    zipCode = YOOHChoose;
    break;
  case 'WQSM':
    city = 'Fayetteville, NC';
    zipCode = FANCChoose;
    break;
  case 'WWCK':
    city = 'Flint, MI';
    zipCode = FLMIChoose;
    break;
  case 'WRCL':
    city = 'Flint, MI';
    zipCode = FLMIChoose;
    break;
  case 'KRCK':
    city = 'Palm Springs, CA';
    zipCode = PSCAChoose;
    break;
  case 'KPSI':
    city = 'Palm Springs, CA';
    zipCode = PSCAChoose;
    break;
  case 'KKUU':
    city = 'Palm Springs, CA';
    zipCode = PSCAChoose;
    break;
  case 'WDJQ':
    city = 'Canton, OH';
    zipCode = CAOHChoose;
    break;
  case 'WHBC':
    city = 'Canton, OH';
    zipCode = CAOHChoose;
    break;
  case 'KMXF':
    city = 'Fayetteville, AR';
    zipCode = FAARChoose;
    break;
  case 'KMCK':
    city = 'Fayetteville, AR';
    zipCode = FAARChoose;
    break;
  case 'KRUF':
    city = 'Shreveport, LA';
    zipCode = SHLAChoose;
    break;
  case 'KQHN':
    city = 'Shreveport, LA';
    zipCode = SHLAChoose;
    break;
  case 'WIOG':
    city = 'Saginaw, MI';
    zipCode = SAMIChoose;
    break;
  case 'WGER':
    city = 'Saginaw, MI';
    zipCode = SAMIChoose;
    break;
  case 'WIXX':
    city = 'Appleton, WI';
    zipCode = APWIChoose;
    break;
  case 'WKSZ':
    city = 'Appleton, WI';
    zipCode = APWIChoose;
    break;
  case 'WQLH':
    city = 'Appleton, WI';
    zipCode = APWIChoose;
    break;
  case 'KSPW':
    city = 'Springfield, MO';
    zipCode = SPMOChoose;
    break;
  case 'KKPN':
    city = 'Corpus Christi, TX';
    zipCode = CCTXChoose;
    break;
  case 'KLTG':
    city = 'Corpus Christi, TX';
    zipCode = CCTXChoose;
    break;
  case 'KZFM':
    city = 'Corpus Christi, TX';
    zipCode = CCTXChoose;
    break;
  case 'KQXY':
    city = 'Beaumont, TX';
    zipCode = BETXChoose;
    break;
  case 'WXXX':
    city = 'Burlington, VT';
    zipCode = BUVTChoose;
    break;
  case 'WAYV':
    city = 'Atlantic City, NJ';
    zipCode = ACNJChoose;
    break;
  case 'WSJO':
    city = 'Atlantic City, NJ';
    zipCode = ACNJChoose;
    break;
  case 'WZBZ':
    city = 'Atlantic City, NJ';
    zipCode = ACNJChoose;
    break;
  case 'WOCQ':
    city = 'Salisbury, MD';
    zipCode = SAMDChoose;
    break;
  case 'WPST':
    city = 'Trenton, NJ';
    zipCode = TRNJChoose;
    break;
  case 'KLJT':
    city = 'Tyler, TX';
    zipCode = TYTXChoose;
    break;
  case 'KTYL':
    city = 'Tyler, TX';
    zipCode = TYTXChoose;
    break;
  case 'KBLZ':
    city = 'Tyler, TX';
    zipCode = TYTXChoose;
    break;
  case 'KDUK':
    city = 'Eugene, OR';
    zipCode = EUORChoose;
    break;
  case 'KBEA':
    city = 'Davenport, IA';
    zipCode = DAIAChoose;
    break;
  case 'KQCS':
    city = 'Davenport, IA';
    zipCode = DAIAChoose;
    break;
  case 'WZOK':
    city = 'Rockford, IL';
    zipCode = ROILChoose;
    break;
  case 'WPIA':
    city = 'Peoria, IL';
    zipCode = PEILChoose;
    break;
  case 'WZPW':
    city = 'Peoria, IL';
    zipCode = PEILChoose;
    break;
  case 'WHHY':
    city = 'Montgomery, AL';
    zipCode = MOALChoose;
    break;
  case 'WXYK':
    city = 'Biloxi, MS';
    zipCode = BIMSChoose;
    break;
  case 'WMGB':
    city = 'Macon, GA';
    zipCode = MAGAChoose;
    break;
  case 'WWXM':
    city = 'Myrtle Beach, SC';
    zipCode = MBSCChoose;
    break;
  case 'WAEV':
    city = 'Savannah, GA';
    zipCode = SAGAChoose;
    break;
  case 'WQNQ':
    city = 'Asheville, NC';
    zipCode = ASNCChoose;
    break;
  case 'WKEE':
    city = 'Huntington, WV';
    zipCode = HUWVChoose;
    break;
  case 'WHTF':
    city = 'Tallahassee, FL';
    zipCode = TAFLChoose;
    break;
  case 'WAZO':
    city = 'Wilmington, NC';
    zipCode = WINCChoose;
    break;
  case 'WSTO':
    city = 'Evansville, IN';
    zipCode = EVINChoose;
    break;
  case 'WSKS':
    city = 'Utica, NY';
    zipCode = UTNYChoose;
    break;
  case 'WPKF':
    city = 'Poughkeepsie, NY';
    zipCode = PONYChoose;
    break;
  case 'WDLD':
    city = 'Hagerstown, MD';
    zipCode = HAMDChoose;
    break;
  case 'WJBQ':
    city = 'Portland, ME';
    zipCode = POMEChoose;
    break;
  case 'WRTS':
    city = 'Erie, PA';
    zipCode = ERPAChoose;
    break;
  case 'KWWV':
    city = 'San Luis Obispo, CA';
    zipCode = SLOCAChoose;
    break;
  case 'KFRX':
    city = 'Lincoln, NE';
    zipCode = LINEChoose;
    break;
  case 'WJYY':
    city = 'Concord, NH';
    zipCode = CONHChoose;
    break;
  case 'KGOT':
    city = 'Anchorage, AK';
    zipCode = ANAKChoose;
    break;
  case 'KFAT':
    city = 'Anchorage, AK';
    zipCode = ANAKChoose;
    break;
  case 'KZBB':
    city = 'Fort Smith, AR';
    zipCode = FSARChoose;
    break;
  case 'KISR':
    city = 'Fort Smith, AR';
    zipCode = FSARChoose;
    break;
  case 'KBBQ':
    city = 'Fort Smith, AR';
    zipCode = FSARChoose;
    break;
  case 'WVAQ':
    city = 'Morgantown, WV';
    zipCode = MOWVChoose;
    break;
  case 'WQGN':
    city = 'New London, CT';
    zipCode = NLCTChoose;
    break;
  case 'WWRX':
    city = 'New London, CT';
    zipCode = NLCTChoose;
    break;
  case 'WFHN':
    city = 'New Bedford, MA';
    zipCode = NBMAChoose;
    break;
  case 'WNDV':
    city = 'South Bend, IN';
    zipCode = SBINChoose;
    break;
  case 'KZII':
    city = 'Lubbock, TX';
    zipCode = LUTXChoose;
    break;
  case 'KBTE':
    city = 'Lubbock, TX';
    zipCode = LUTXChoose;
    break;
  case 'KCRS':
    city = 'Odessa, TX';
    zipCode = ODTXChoose;
    break;
  case 'KZBT':
    city = 'Odessa, TX';
    zipCode = ODTXChoose;
    break;
  case 'WWYL':
    city = 'Binghamton, NY';
    zipCode = BINYChoose;
    break;
  case 'WVSR':
    city = 'Charleston, WV';
    zipCode = CHWVChoose;
    break;
  case 'WRVZ':
    city = 'Charleston, WV';
    zipCode = CHWVChoose;
    break;
  case 'WKFR':
    city = 'Kalamazoo, MI';
    zipCode = KAMIChoose;
    break;
  case 'WZNS':
    city = 'Fort Walton Beach, FL';
    zipCode = FWBFLChoose;
    break;
  case 'WFFY':
    city = 'Fort Walton Beach, FL';
    zipCode = FWBFLChoose;
    break;
  case 'WCGQ':
    city = 'Columbus, GA';
    zipCode = COGAChoose;
    break;
  case 'WWKZ':
    city = 'Tupelo, MS';
    zipCode = TUMSChoose;
    break;
  case 'WKMX':
    city = 'Dothan, AL';
    zipCode = DOALChoose;
    break;
  case 'KQIZ':
    city = 'Amarillo, TX';
    zipCode = AMTXChoose;
    break;
  case '=KUJ':
    city = 'Kennewick, WA';
    zipCode = KEWAChoose;
    break;
  case 'WRZE':
    city = 'Cape Cod, MA';
    zipCode = CCMAChoose;
    break;
  case 'WKHQ':
    city = 'Traverse City, MI';
    zipCode = TCMIChoose;
    break;
  case 'KWTX':
    city = 'Waco, TX';
    zipCode = WATXChoose;
    break;
  case 'KFFM':
    city = 'Yakima, WA';
    zipCode = YAWAChoose;
    break;
  case 'KHHK':
    city = 'Yakima, WA';
    zipCode = YAWAChoose;
    break;
  case 'KNEX':
    city = 'Laredo, TX';
    zipCode = LATXChoose;
    break;
  case 'KIFS':
    city = 'Medford, OR';
    zipCode = MEORChoose;
    break;
  case 'KPAT':
    city = 'Santa Maria, CA';
    zipCode = SMCAChoose;
    break;
  case 'KZIA':
    city = 'Cedar Rapids, IA';
    zipCode = CRIAChoose;
    break;
  case 'WMGI':
    city = 'Terre Haute, IN';
    zipCode = THINChoose;
    break;
  case 'WQQB':
    city = 'Champaign, IL';
    zipCode = CPILChoose;
    break;
  case 'WCZQ':
    city = 'Champaign, IL';
    zipCode = CPILChoose;
    break;
  case 'WJMX':
    city = 'Florence, SC';
    zipCode = FLSCChoose;
    break;
  case 'KCLD':
    city = 'St. Cloud, MN';
    zipCode = SCMNChoose;
    break;
  case 'WKSI':
    city = 'Winchester, VA';
    zipCode = WIVAChoose;
    break;
  case 'WBZN':
    city = 'Bangor, ME';
    zipCode = BAMEChoose;
    break;
  case 'KQID':
    city = 'Alexandria, LA';
    zipCode = ALLAChoose;
    break;
  case 'WLVY':
    city = 'Elmira, NY';
    zipCode = ELNYChoose;
    break;
  case 'WNKI':
    city = 'Elmira, NY';
    zipCode = ELNYChoose;
    break;
  case 'KQLK':
    city = 'Lake Charles, LA';
    zipCode = LCLAChoose;
    break;
  case 'KROC':
    city = 'Rochester, MN';
    zipCode = ROMNChoose;
    break;
  case 'KNDE':
    city = 'Bryan, TX';
    zipCode = BRTXChoose;
    break;
  case 'KSYN':
    city = 'Joplin, MO';
    zipCode = JOMOChoose;
    break;
  case 'WAZY':
    city = 'Lafayette, IN';
    zipCode = LAINChoose;
    break;
  case 'WILN':
    city = 'Panama City, FL';
    zipCode = PCFLChoose;
    break;
  case 'WBNQ':
    city = 'Bloomington, IL';
    zipCode = BLILChoose;
    break;
  case 'KLYV':
    city = 'Dubuque, IA';
    zipCode = DUIAChoose;
    break;
  case 'KCDD':
    city = 'Abilene, TX';
    zipCode = ABTXChoose;
    break;
  case 'KOQL':
    city = 'Columbia, MO';
    zipCode = COMOChoose;
    break;
  case 'KKHQ':
    city = 'Waterloo, IA';
    zipCode = WAIAChoose;
    break;
  case 'KNOE':
    city = 'Monroe, LA';
    zipCode = MOLAChoose;
    break;
  case 'KRSQ':
    city = 'Billings, MT';
    zipCode = BIMTChoose;
    break;
  case 'WNUQ':
    city = 'Albany, GA';
    zipCode = ALGAChoose;
    break;
  case 'WQPO':
    city = 'Harrisonburg, VA';
    zipCode = HAVAChoose;
    break;
  case 'KRCS':
    city = 'Rapid City, SD';
    zipCode = RCSDChoose;
    break;
  case 'KKCT':
    city = 'Bismarck, ND';
    zipCode = BINDChoose;
    break;
  case 'KIXY':
    city = 'San Angelo, TX';
    zipCode = SATXChoose;
    break;
  case 'KKXL':
    city = 'Grand Forks, ND';
    zipCode = GFNDChoose;
    break;
  case 'KTRS':
    city = 'Casper, WY';
    zipCode = CAWYChoose;
    break;

}

var config = {
  email: 'ashley1110@gmail.com',
  username: 'Ashley',
  community: city,
  zip: zipCode,
  sex: 'female',
  age: '20'
},
SP = document.getElementById('SPEASP2');
if (null === SP) {
var song1 = document.querySelector('input[name=song1]');
song1.value = 'Britney Spears - Slumber Party f/ Tinashe'
} else SP.checked = !0;
for (var field in config) {
var inputField = document.querySelector('input[name=' + field + ']');
inputField || (inputField = document.querySelector('select[name=' + field + ']')),
inputField.value = config[field]
}
