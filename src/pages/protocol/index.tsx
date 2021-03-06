import React from 'react'
import styles from './protcol.module.scss'
import TopBar from 'src/components/topBar'
const Protocol = () => {
  return (
    <div>
      <TopBar title='用户协议' />
      <div className={styles.container}>
        <div className={styles.lineItem}>
          本用户使用条款和隐私声明（包括但不限于本协议项下全部条款以及与本协议相关的通过平台发布或未来可能发布的各项规则，以下简称“本协议”）系成都品合祐德科技有限公司（以下简称“本公司”）拟定并发布的，用于规范平台注册用户（以下简称“用户”或“您”）在平台上注册以及使用平台服务的行为。在您注册成为像素用户之前，请务必确认：您是具有完全民事权利能力及民事行为能力、有能力履行并承担本协议项下的权利及义务、并能够独立作为法律诉讼的一方，您已认真阅读本协议项下全部条款，一旦您确认接受本协议，即表示您已经完全阅读、理解、同意接受并遵守本协议全部条款。
        </div>

        <div className={styles.lineItem}>
          像素公寓系由本公司研发运营管理，本公司对本协议享有修改及解释之权利。如本协议有任何修改变更，本公司将在像素公寓微信公众号、小程序、app软件刊载相关变更事项公告，并不再单独以其它方式通知您。所有修订的条款和规则一经公告立即生效，并对您产生法律约束力。
        </div>
        <div className={styles.lineItem}>
          如您对修改变更的内容有异议，请您立即联系我们；如您继续使用像素公寓的任何服务，则视为您已经同意并接受所有修改变更内容。当您与像素公寓发生纠纷时，所有条款及规则应以最新版本为准
          您点击页面下的“已阅读并同意
          《用户使用条款和隐私声明》”选项、或首次在手机微信公众号、小程序、app软件上点击“登录”选项取得账号、密码及/或验证码，即视为您对本协议的签署；在任何情况下，您都不得以未签署纸质协议为由否认本协议各条款及效力。若因您对本协议的违反导致任何法律后果的发生，您应以自己的名义独立承担相应的全部责任。
          如您对本协议的任何内容有疑议，敬请致电客服热线：
          <a href='tel:400-806-3399' className={styles.nowrap}>
            400-806-3399
          </a>
          ，在线客服时间：9:00-21:00，像素公寓竭诚为您服务。
        </div>
        <div className={styles.title}>用户协议</div>
        <div className={styles.subTitle}>一、注册账号</div>
        <div className={styles.subTitle}>（一）提供个人信息</div>
        <div className={styles.lineItem}>
          1、您有义务按照像素公寓的要求，及时、详尽、准确地提供您真实的身份信息及个人资料（下称个人信息），并在个人信息发生变更时及时更新，您需要提供的个人信息包括但不限于姓名、性别、年龄、联系电话、电子邮箱、目前职业、通讯地址、紧急联系人等。
        </div>
        <div className={styles.lineItem}>
          2、如像素公寓发现您提供的个人信息不完整、不真实或错误的，有权要求您及时更新、补正个人信息，或直接单方面暂时性或永久性的停止您像素公寓账号的部分或全部使用权限。
        </div>
        <div className={styles.lineItem}>
          3、您承诺，您所提供的个人信息资料完整、真实、无误，若因信息不完整、不真实或错误产生的任何问题、不良后果（包括任何直接损失及间接损失）、法律责任均由您自行承担，像素公寓不承担任何责任。
        </div>
        <div className={styles.subTitle}>（二）账号：</div>
        <div className={styles.lineItem}>
          注册成功后，您将获得一个和手机号码一致的像素公寓账号（下称账号）。如发现账号异常，请联系管家或像素客服
          <a href='tel:400-806-3399' className={styles.nowrap}>
            400-806-3399
          </a>
          。
        </div>
        <div className={styles.subTitle}>二、个人隐私保护</div>
        <div className={styles.lineItem}>
          尊重和保护每一位像素公寓客的个人隐私是像素公寓的基本原则。像素公寓将根据隐私声明之内容对您个人隐私进行保护，隐私声明属于本用户协议不可分割的一部分。您承诺已经充分阅读、理解、同意并接受像素公寓据此处理您的个人信息。
        </div>
        <div className={styles.subTitle}>三、账号安全</div>
        <div className={styles.subTitle}>（一）妥善保管账号及密码：</div>
        <div className={styles.lineItem}>
          1、您的账号及提供的个人信息是您在像素公寓的唯一识别信息。您注册成功后，请您严格履行对其的保密及保管，切勿将其转让、出售或授权给任何第三方使用。
        </div>
        <div className={styles.lineItem}>
          2、若您主动告知他人您的账号或与他人共用账号，像素公寓有权认为该账号的所有操作均代表您的本人意愿，并且由此产生的任何问题、不良后果（包括直接损失及间接损失）、法律责任均由您自行承担，像素公寓不承担任何责任。
        </div>
        <div className={styles.lineItem}>
          3、若您发现有第三人冒用、盗用您的账号，应立即通知像素公寓停止您的账号服务，否则，由此产生的任何问题、不良后果（包括任何直接损失及间接损失）、法律责任均由您自行承担，像素公寓不承担任何责任。并且，由于像素公寓对您的请求需要采取行动的合理时间，故在像素公寓停止您的账号服务前，像素公寓对第三人使用您的账号进行的操作所带来的损失不承担任何责任。
        </div>
        <div className={styles.lineItem}>
          4、您在此承诺，您的账号及密码在登陆像素公寓后，所从事的一切行为均代表您本人，并由您本人承担相应的法律后果。
        </div>
        <div className={styles.subTitle}>（二）账号修改、找回：</div>
        <div className={styles.lineItem}>
          1、账号修改：如您需修改您已注册的账号，请直接致电像素公寓进行身份验证后，由像素公寓为您修改。
        </div>
        <div className={styles.lineItem}>
          2、账号密码找回：如您遗忘您已经注册的账号，请直接致电像素公寓进行身份验证后，由像素公寓为您重置账号。
        </div>

        <div className={styles.subTitle}>四、账号使用规范</div>
        <div className={styles.lineItem}>
          您同意并承诺在使用账号时，应当遵守中华人民共和国法律法规及各项政策，维护像素公寓品牌形象，不会利用账号从事以下活动，或在使用账号过程中存在以下行为。否则，像素公寓有权立即停止您账号的部分或全部使用权限，并有权追究您相应的法律责任（若有）：
        </div>
        <div className={styles.lineItem}>
          （一）上载、展示、发送、传播、散布或者以其他方式传送含有下列内容之一的信息，像素公寓有权立即删除部分或全部该等信息：
        </div>
        <div className={styles.lineItem}>
          1、违反中华人民共和国法律法规及各项政策的非法信息，包括但不限于危害国家安全、泄露国家秘密、颠覆国家政权、破坏宗教政策、邪教封建迷信、危害国家或社会公共利益、涉及暴力、淫秽、色情、赌博、恐怖、犯罪的信息；
        </div>
        <div className={styles.lineItem}>2、通过捏造、编造、臆想等方式虚构的不实信息；</div>
        <div className={styles.lineItem}>3、恶意诋毁、诽谤、中伤、恐吓、威胁、骚扰他人的信息；</div>
        <div className={styles.lineItem}>4、侵犯他人名誉权，隐私权、知识产权、商业秘密的信息；</div>
        <div className={styles.lineItem}>
          5、恶意诋毁、诽谤、恐吓、中伤、威胁、骚扰像素公寓客服、成都品合祐德科技有限公司或其员工的信息；
        </div>
        <div className={styles.lineItem}>6、侵害像素公寓品牌名誉、成都品合祐德科技有限公司商业秘密的信息；</div>
        <div className={styles.lineItem}>7、其他中华人民共和国法律法规政策、社会道德、公序良俗所禁止或限制的信息。</div>
        <div className={styles.lineItem}>
          （二）非法利用病毒、软件、程序等破坏、侵害像素公寓系统，干扰像素公寓的正常运营的；
        </div>
        <div className={styles.lineItem}>（三）非法截取、盗取、改变、增删系统数据、功能、程序的；</div>
        <div className={styles.lineItem}>（四）以非法目的使用账号的；</div>
        <div className={styles.lineItem}>（五）长时间不使用，</div>
        <div className={styles.lineItem}>（六）其他危害或可能危害像素公寓安全的行为。</div>
        <div className={styles.subTitle}>五、服务内容</div>
        <div className={styles.subTitle}>（一）业务介绍</div>
        <div className={styles.lineItem}>
          您已理解并知悉：像素公寓经营的房屋租赁业务是符合中华人民共和国法律法规、地方政策及相关制度的租赁业务，且并非仅限于或仅针对某性别、某群体。
        </div>
        <div className={styles.subTitle}>（二）线上签约</div>
        <div className={styles.lineItem}>
          您在成功注册账号后，可以通过像素公寓公众号、小程序、app软件特定板块进行房源的线上租约确认。请您在签订《像素公寓房屋租赁合同》前，仔细阅读合同全部条款及内容，并按照提示信息完成所有步骤。您完成该套房源的全部签约步骤即视为您对该《像素公寓房屋租赁合同》的签署，任何情况下您均并不得以未签订纸质版本合同或纸质版本合同与该《房屋租赁合同》约定不一致为由否认该《像素公寓房屋租赁合同》的任何条款及效力，像素公寓系统将生成一份电子版《像素公寓房屋租赁合同》，并保存在您的账号中。如有疑议，请您致电像素公寓客服热线：
          <a href='tel:400-806-3399' className={styles.nowrap}>
            400-806-3399
          </a>
        </div>

        <div className={styles.subTitle}>（三）线上支付</div>

        <div className={styles.lineItem}>
          您在成功注册账号并预定或完成租赁签约后，可通过像素公寓公众号、小程序、app软件特定板块进行预定或租赁房源的账单支付（包括但不限于租金、水电煤费用）。
        </div>
        <div className={styles.subTitle}>六、免责声明：</div>
        <div className={styles.lineItem}>
          您已经充分阅读、理解、同意并接受，鉴于网络服务之特殊性，像素公寓无法担保以下内容，并且对以下内容不承担法律责任：
        </div>
        <div className={styles.lineItem}>（一）像素公寓不能保证提供的网络服务一定满足您的要求；</div>
        <div className={styles.lineItem}>
          （二）像素公寓不能保证外部网络链接的真实性、安全性、准确性、完整性，因外部链接指向的为不由像素公寓实际控制的网页内容；
        </div>
        <div className={styles.lineItem}>
          （三）像素公寓不能控制网络服务因所依赖的电信设备故障、不可抗力、黑客攻击、电信部门技术调整或故障、或其他像素公寓无法控制的原因造成的像素公寓部分或全部服务暂停、中断、无法使用、或者其他缺陷问题，但像素公寓承诺将尽力减少因此给您造成的损失和影响。
        </div>

        <div className={styles.subTitle}>七、知识产权声明</div>
        <div className={styles.lineItem}>
          （一）著作权、专利权：像素公寓在所提供的全部内容及网络服务的过程中，包含、涉及、提及的文本、图片、图形、图像、视频、软件、程序、程序代码等（统称网站内容）之著作权及/或专利权均受法律保护，未经相关权利人同意，任何自然人、法人或其他组织不得擅自直接或间接转载、引用、使用或者以其他方式复制发表发布，但法定许可的情形除外。其中属于像素公寓所有之部分，必须经过像素公寓书面授权许可。如需转载、引用、使用或者以其他方式复制发表发布像素公寓网站内容，或者磋商支付法定许可报酬，请联系像素公寓客服热线：
          <a href='tel:400-806-3399' className={styles.nowrap}>
            400-806-3399
          </a>
        </div>
        <div className={styles.lineItem}>
          （二）商标：“像素公寓”以及像素公寓图形商标是像素公寓的商标及/或注册商标，未经像素公寓明确书面授权擅自非法使用（包括但不限于复制、展示、传播、发送、上载、下载）的，像素公寓将依法追究其法律责任。
        </div>
        <div className={styles.subTitle}>八、法律责任</div>
        <div className={styles.lineItem}>
          因您违反本协议中的承诺、保证或任何其他义务，或因您的承诺、保证不真实、不准确、不完整或具有误导性，致使像素公寓遭受损失的，像素公寓有权要求您赔偿全部损失并依法追究您的法律责任。如造成第三方损失的，您应当独立向第三方承担相应的全部赔偿责任。
        </div>

        <div className={styles.subTitle}>九、通知送达</div>
        <div className={styles.lineItem}>
          （一）您有义务根据像素公寓的要求提供您的真实资料，并保证您的通讯地址、联系电话、电子邮箱地址、紧急联系人等个人通信信息的真实性及有效性，以便像素公寓将该等信息作为联系您的合法依据。如有该等信息有变更，您有义务及时更新您的账号信息或直接致电像素公寓客服热线：
          <a href='tel:400-806-3399' className={styles.nowrap}>
            400-806-3399
          </a>
          进行变更。如通过您提供的个人通讯信息无法联络到您，由此产生的一切损失或增加的额外费用均由您独立承担。
        </div>
        <div className={styles.lineItem}>
          （二）您同意并接受：像素公寓通过您提供的个人通讯信息联系您，并会定期或不定期地向您推送、告知、送达一些消息和通知。任何消息和通知于像素公寓发出之日起，即视为已经送达用户，您不得以任何理由否认该等信息的效力或拒绝履行该等信息下用户的相应义务。
        </div>
        <div className='sub-item'>十、其他规定</div>
        <div className={styles.lineItem}>
          （一）未成年人特别提示：如您为未成年人（未满18周岁），像素公寓提示您，请遵守全国青少年网络文明公约，您无权单独使用像素公寓的部分或全部功能及服务，请在父母或监护人的陪同下使用像素公寓服务。
        </div>
        <div className={styles.lineItem}>
          （二）权利义务转让：您同意像素公寓有权将本协议项下部分或全部权利和义务，转让给其他第三方，且无需告知您并征得您的同意。
        </div>
        <div className={styles.lineItem}>（三）像素公寓未行使本协议中的任何权利，不构成对前该等权利的放弃。</div>
        <div className={styles.lineItem}>
          （四）本用户协议中的任何条款与中国法律强制性规定冲突导致其全部或部分无效的，不影响本协议其余条款的效力。
        </div>
        <div className={styles.lineItem}>
          （五）终止：除非像素公寓终止本协议，或您根据法律法规及本协议的约定申请终止本协议并经像素公寓同意，本协议长久有效。
        </div>
        <div className={styles.lineItem}>
          （六）法律适用：本协议的签订、履行、变更、终止、解释均适用中华人民共和国法律。
        </div>

        <div className={styles.lineItem}>
          （七）法律管辖：因本协议或者像素公寓服务产生的一切纠纷及争议应向像素公寓所在地的人民法院提起诉讼。
        </div>

        <div className={styles.title}>隐私声明</div>
        <div className={styles.lineItem}>
          像素公寓致力于尊重并保护用户的个人隐私，鉴于网络的特性，我们无可避免地需要某些信息才能为您提供您请求的服务，本隐私声明（以下简称“本声明”）将阐述我们对用户信息的收集、使用、保护和共享政策，我们建议您完整地阅读本声明。一旦您确认接受本声明，即表示您已经完全阅读、理解、同意接受本声明的全部条款。
        </div>
        <div className={styles.lineItem}>
          本声明适用于像素公寓的所有服务，随着像素公寓服务范围的扩大，像素公寓可随时更新隐私声明的内容，且毋须另行通知。更新后的隐私声明一旦在网页上公布即有效，并代替原来的隐私声明。欢迎您随时查看本声明，并向我们反馈您的意见。
        </div>
        <div className={styles.subTitle}>一、信息的收集与使用</div>
        <div className={styles.lineItem}>
          我们将通过您的IP地址来收集非个人化的信息，例如您的浏览器性质、操作系统种类、给您提供接入服务的ISP的域名等，以优化在您手机或计算机等屏幕上显示的页面。通过收集上述信息，我们进行客流量统计，从而改进网站的管理或服务。
        </div>
        <div className={styles.lineItem}>
          通常，您能在匿名的状态下访问像素公寓并获取信息。当我们需要可用于标识您的个人身份或允许我们与您联系的信息时，我们会征求您的同意。当您在像素公寓进行注册登记或使用我们提供的各项服务时，您需要向我们提供您的个人信息，这些个人信息包括但不限于：
        </div>
        <div className={styles.lineItem}>
          个人识别信息：如姓名、性别、身份证号码、电子邮件地址，住址和电话号码等信息。
        </div>
        <div className={styles.lineItem}>
          个人背景：如年龄、出生日期、职业、教育程度、星座、收入状况、婚姻、家庭状况等。
        </div>
        <div className={styles.subTitle}>二、关于您的个人信息</div>
        <div className={styles.lineItem}>
          请了解，像素公寓严格保护您个人信息的安全，一经注册，像素公寓仅会公开您的性别、星座、职业、爱好，您的其余个人信息将严格保密，未经您的同意，我们不会将您提供的个人信息利用于其它商业目的，我们将使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄露。
        </div>
        <div className={styles.lineItem}>
          您理解并同意，像素公寓仅会在法律要求或符合像素公寓的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：
        </div>
        <div className={styles.lineItem}>(a) 满足法律或行政法规的明文规定，或者符合像素公寓适用的法律程序；</div>
        <div className={styles.lineItem}>
          (b)符合像素公寓相关服务条款、软件许可使用协议的约定； (c) 保护像素公寓的权利或财产；
        </div>
        <div className={styles.lineItem}>
          (d) 在紧急情况下保护像素公寓员工、像素公寓产品或服务的用户或大众的个人安全。
        </div>
        <div className={styles.subTitle}>三、关于免责声明</div>
        <div className={styles.lineItem}>就下列相关事宜的发生，像素公寓将不承担任何法律责任：</div>
        <div className={styles.lineItem}>
          *
          由于您将账号告知他人或与他人共享注册账号，由此导致的任何个人信息的泄露，或其他非因像素公寓原因导致的个人信息的泄露；
        </div>
        <div className={styles.lineItem}>* 像素公寓根据法律规定或政府相关政策要求提供您的个人信息；</div>
        <div className={styles.lineItem}>
          * 任何第三方根据像素公寓各服务条款及声明中所列明的情况使用您的个人信息，由此所产生的纠纷；
        </div>
        <div className={styles.lineItem}>
          *
          任何由于黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营而造成的个人信息泄露、丢失、被盗用或被窜改等；
        </div>
        <div className={styles.lineItem}>* 因不可抗力导致的任何后果；</div>
        <div className={styles.lineItem}>* 像素公寓在各服务条款及声明中列明的使用方式或免责情形。</div>
        <div className={styles.lineItem}>
          * 成都品合祐德科技有限公司发布内容适用于其关联公司，但最终解释权归成都品合祐德科技有限公司所有。
        </div>
        <div className={styles.subTitle}>四、联系我们</div>
        <div className={styles.lineItem}>
          如果您对本隐私声明或像素公寓的隐私保护措施以及您在使用过程中的问题有任何意见和建议，敬请致电客服热线：
          <a href='tel:400-806-3399' className={styles.nowrap}>
            400-806-3399
          </a>
          在您注册成为像素用户之前，请务必确认：您是具有完全民事权利能力及民事行为能力、有能力履行并承担本协议项下的权利及义务、并能够独立作为法律诉讼的一方，您已认真阅读本协议项下全部条款，一旦您确认接受本协议，即表示您已经完全阅读、理解、同意接受并遵守本协议全部条款。
        </div>
      </div>
    </div>
  )
}
export default Protocol
