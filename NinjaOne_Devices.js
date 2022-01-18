import { Selector } from 'testcafe';
//import https from 'https';

const devicelist = Selector('/devices.json');

fixture ("NinjaOne devices page").page(`https://github.com/NinjaRMM/devicesTask_serverApp`);



test('DeviceList', async t => {
    await t
        .click(Selector('main a').withText('devices.json')) 
        .expect(Selector('main span').withText('\"e8okoP2l5\"').exists).ok()
        .expect(Selector('main span').withText('\"DESKTOP-SMART\"').exists).ok()
        .expect(Selector('main span').withText('\"WINDOWS_WORKSTATION\"').exists).ok()
        .expect(Selector('main span').withText('\"10\"').exists).ok()
        


        .expect(Selector('main span').withText('\"Th3ngERn9\"').exists).ok()
        .expect(Selector('main span').withText('\"MAC-LEADER\"').exists).ok()
        .expect(Selector('main span').withText('\"MAC\"').exists).ok()
        .expect(Selector('main span').withText('\"2048\"').exists).ok()

        .expect(Selector('main span').withText('\"Q1JdBnE12\"').exists).ok()
        .expect(Selector('main span').withText('\"ARMANDO-SERVER\"').exists).ok()
        .expect(Selector('main span').withText('\"WINDOWS_SERVER\"').exists).ok()
        .expect(Selector('main span').withText('\"256\"').exists).ok()


        
        .expect(Selector('main span').withText('\"e7ocoQ2n3\"').exists).ok()
        .expect(Selector('main span').withText('\"MIGUEL-PC\"').exists).ok()
        .expect(Selector('main span').withText('\"WINDOWS_WORKSTATION\"').exists).ok()
        .expect(Selector('main span').withText('\"500\"').exists).ok()

        .expect(Selector('main span').withText('\"Jj5bn3G2H\"').exists).ok()
        .expect(Selector('main span').withText('\"FIRST-MAC\"').exists).ok()
        .expect(Selector('main span').withText('\"MAC\"').exists).ok()
        .expect(Selector('main span').withText('\"180\"').exists).ok()

        .expect(Selector('main span').withText('\"GT556QGnk\"').exists).ok()
        .expect(Selector('main span').withText('\"GOOD-MAC\"').exists).ok()
        .expect(Selector('main span').withText('\"MAC\"').exists).ok()
        .expect(Selector('main span').withText('\"500\"').exists).ok()

        .expect(Selector('main span').withText('\"R5LdSnQhY\"').exists).ok()
        .expect(Selector('main span').withText('\"SERVER-ONE\"').exists).ok()
        .expect(Selector('main span').withText('\"WINDOWS_SERVER\"').exists).ok()
        .expect(Selector('main span').withText('\"50\"').exists).ok()

        .expect(Selector('main span').withText('\"ab1coL2n9\"').exists).ok()
        .expect(Selector('main span').withText('\"GILBERT-COMPUTER\"').exists).ok()
        .expect(Selector('main span').withText('\"WINDOWS_WORKSTATION\"').exists).ok()
        .expect(Selector('main span').withText('\"750\"').exists).ok()

        .expect(Selector('main span').withText('\"LM5dBnJ2G\"').exists).ok()
        .expect(Selector('main span').withText('\"MOON-SMART\"').exists).ok()
        .expect(Selector('main span').withText('\"WINDOWS_SERVER\"').exists).ok()
        .expect(Selector('main span').withText('\"256\"').exists).ok()

        .expect(Selector('main span').withText('\"Up5bcEQp4\"').exists).ok()
        .expect(Selector('main span').withText('\"JULIO-MAC-LOCAL\"').exists).ok()
        .expect(Selector('main span').withText('\"MAC\"').exists).ok()
        .expect(Selector('main span').withText('\"512\"').exists).ok()


});


