import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./ReferAndEarn.css";
import inviteIcon from "../../svgs/invite_people.svg";
import rupeeIcon from "../../svgs/rupee.svg";
import discountIcon from "../../svgs/discount.svg";
import walletIcon from "../../svgs/wallet.svg";
import referralIcon from "../../svgs/referal_coupon.svg";
import { Link } from "react-router-dom";

const ReferAndEarn = () => {
	return (
		<div className='referEarn__container'>
			<Breadcrumb breadcrumb={"UI/UX>Refer & Earn"} />

			<div className='referEarn'>
				{/* Refer n Earn */}
				<div className='referEarn__section'>
					<div className='dashboard__card'>
						<div className='dashboard__data'>
							<h4>Referral Earning</h4>₹ 2,500
						</div>
						<div className='dashboard__data'>
							<h4>Total Referrals</h4>7
						</div>
						<div className='dashboard__data'>
							<h4>Wallet Balance</h4>₹ 500
						</div>
						<div className='withdraw_balance__btn'>
							<button>Withdraw Balance</button>
						</div>
					</div>
					<div className='referral_code'>
						<h1 className='heading'>Your Referral Code </h1>
						<div className='code'>
							<div>EDCH54</div>
						</div>
					</div>
				</div>

				{/* Instruction */}
				<h1 className='instruction__heading heading'>How does it work ?</h1>
				<div className='instruction__section'>
					<div className='instruction__box'>
						<div className='icon'>
							<img src={inviteIcon} alt='' />
						</div>
						<div className='instruction__box__text'>
							<div className='instruction__box_heading'>
								Invite your Friends
							</div>
							<span className='instruction__box_description'>
								Share the link tutedude.com with your friends
							</span>
						</div>
					</div>
					<div className='instruction__box'>
						<div className='icon'>
							<img src={referralIcon} alt='' />
						</div>
						<div className='instruction__box__text'>
							<span className='instruction__box_heading'>
								Friend purchases any course
							</span>
							<span className='instruction__box_description'>
								Using your REFERRAL CODE in the payments page{" "}
							</span>
						</div>
					</div>
					<div className='instruction__box'>
						<div className='icon'>
							<img src={rupeeIcon} alt='' />
						</div>
						<div className='instruction__box__text'>
							<span className='instruction__box_heading'>
								You get ₹ 200 as referral money
							</span>
							<span className='instruction__box_description'>
								On total purchase the friend makes, into your wallet{" "}
							</span>
						</div>
					</div>
					<div className='instruction__box'>
						<div className='icon'>
							<img src={discountIcon} alt='' />
						</div>
						<div className='instruction__box__text'>
							<span className='instruction__box_heading'>
								Your Friend gets ₹ 200 Off
							</span>
							<span className='instruction__box_description'>
								On his overall fee on successful purchase using your referral
								code
							</span>
						</div>
					</div>
					<div className='instruction__box'>
						<div className='icon'>
							<img src={walletIcon} alt='' />
						</div>
						<div className='instruction__box__text'>
							<span className='instruction__box_heading'>
								Transfer money from wallet
							</span>
							<span className='instruction__box_description'>
								When the wallet balance reaches ₹200 or more, you can withdraw
								it
							</span>
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className='group__button'>
					<button className='enrolled__btn ghost-btn'>
						<Link to='/friendsreferred'>Friends Who Enrolled</Link>
					</button>
					<button className='termsCondition__btn ghost-btn'>
						Terms & Conditions
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReferAndEarn;
