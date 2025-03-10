import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Img,
	Row,
	Column,
} from "@react-email/components";

interface ContactFormEmailProps {
	senderName: string;
	senderEmail: string;
	message: string;
	portfolioName?: string;
	portfolioUrl?: string;
	logoUrl?: string;
}

export const ContactFormEmail = ({
	senderName = "John Doe",
	senderEmail = "johndoe@example.com",
	message = "Message",
	portfolioName = "Your Portfolio",
	portfolioUrl = "https://juliusjava.vercel.app",
	logoUrl = "https://media-hosting.imagekit.io//99c60ba656cb45de/JJlogo.jpeg?Expires=1836210639&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qLKE0P-0HbCERHKbzgR9YgjjyLQMxYiI0esTbgxvjgC5lMfag2hgMKV7-2xLru30jAoNDQuz8LqKRz1~MzjPNvTfDcFfPAMvviBS82zerA4ErOvan-rJL5urFvalXJxXNIXobWFjIeETX-BnyRsyon1nVKhiuXnCzyKXxkjemGM-HaXyfBfLHBfKOutlxcWtkTyyQev2k9WBJcoW~VUkBakpwN42dpiKR5Bk4dwstlZiMNwr5fk7MaDMiFjsY42PPQos2I7tnOCogyXjhImmekEA0vtzRy2reLMca-VDGcnHYdVIWUvBgX5T3tUSDa~XAaINCJHOdCdeX6sg2X0SmA__",
}: ContactFormEmailProps) => {
	const previewText = `New message from ${senderName}`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Header with gradient background */}
					<Section style={headerSection}>
						<Img
							src={logoUrl}
							width="150"
							height="150"
							alt={portfolioName}
							style={logo}
						/>
						<Heading style={headerTitle}>{portfolioName}</Heading>
					</Section>

					<Section style={contentSection}>
						<Heading style={h1}>
							<span style={purpleHighlight}>New</span> Message
							Received
						</Heading>

						<Section style={messageCard}>
							<Row>
								<Column>
									<Section style={senderInfoSection}>
										<Text style={infoLabel}>From:</Text>
										<Text style={infoValue}>
											{senderName}
										</Text>
										<Text style={emailValue}>
											{senderEmail}
										</Text>
									</Section>
								</Column>
							</Row>

							<Hr style={divider} />

							<Section style={messageSection}>
								<Text style={infoLabel}>Message:</Text>
								<Text style={messageText}>{message}</Text>
							</Section>

							<Section style={actionSection}>
								<Link
									href={`mailto:${senderEmail}`}
									style={replyButton}
								>
									Reply to {senderName.split(" ")[0]}
								</Link>
							</Section>
						</Section>

						<Text style={instructionText}>
							You can also reply directly to this email to respond
							to {senderName}.
						</Text>
					</Section>

					{/* Footer with gradient */}
					<Section style={footer}>
						<Text style={footerText}>
							© {new Date().getFullYear()} {portfolioName}
						</Text>
						<Text style={footerText}>
							<Link href={portfolioUrl} style={link}>
								{portfolioUrl.replace(/^https?:\/\//, "")}
							</Link>
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default ContactFormEmail;

// Styles using your brand colors
const purpleColor = "#b347e5"; // Approximation of your primary color (280 75% 60%)
const purpleLightColor = "#c47aeb"; // Lighter version
const purpleDarkColor = "#8a35b8"; // Darker version
const backgroundColor = "#f9f7fc"; // Very light purple tint for background

const main = {
	backgroundColor: backgroundColor,
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "0 0 48px",
	marginBottom: "64px",
	maxWidth: "600px",
	borderRadius: "12px",
	boxShadow: "0 4px 20px rgba(179, 71, 229, 0.15)",
	overflow: "hidden",
};

const headerSection = {
	background: `linear-gradient(135deg, ${purpleColor} 0%, ${purpleDarkColor} 100%)`,
	padding: "30px 30px 40px",
	textAlign: "center" as const,
};

const headerTitle = {
	color: "#ffffff",
	fontSize: "28px",
	fontWeight: "bold",
	margin: "15px 0 0",
	textShadow: "0 1px 3px rgba(0,0,0,0.2)",
};

const logo = {
	margin: "0 auto",
	filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
    borderRadius: "100%"
};

const contentSection = {
	padding: "0 30px",
};

const h1 = {
	color: "#333",
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
	fontSize: "26px",
	fontWeight: "bold",
	margin: "30px 0",
	padding: "0",
	textAlign: "center" as const,
};

const purpleHighlight = {
	color: purpleColor,
	fontWeight: "bold",
};

const messageCard = {
	backgroundColor: "#ffffff",
	borderRadius: "12px",
	padding: "5px",
	marginBottom: "30px",
	border: `1px solid ${purpleLightColor}20`,
	boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
	overflow: "hidden",
};

const senderInfoSection = {
	backgroundColor: "#f9f7fc",
	padding: "20px 25px",
	borderTopLeftRadius: "8px",
	borderTopRightRadius: "8px",
	borderLeft: `4px solid ${purpleColor}`,
};

const messageSection = {
	padding: "20px 25px",
};

const infoLabel = {
	fontSize: "14px",
	color: "#666",
	marginBottom: "8px",
	textTransform: "uppercase" as const,
	letterSpacing: "0.5px",
	fontWeight: "500",
};

const infoValue = {
	fontSize: "18px",
	color: "#333",
	marginTop: "0",
	marginBottom: "5px",
	fontWeight: "600",
};

const emailValue = {
	fontSize: "15px",
	color: purpleColor,
	marginTop: "0",
	marginBottom: "0",
	fontWeight: "normal",
};

const messageText = {
	fontSize: "16px",
	color: "#333",
	marginTop: "0",
	lineHeight: "1.6",
	whiteSpace: "pre-line" as const,
};

const actionSection = {
	padding: "5px 25px 25px",
	textAlign: "right" as const,
};

const replyButton = {
	backgroundColor: purpleColor,
	color: "#ffffff",
	padding: "10px 20px",
	borderRadius: "6px",
	textDecoration: "none",
	fontSize: "14px",
	fontWeight: "bold",
	display: "inline-block",
	textAlign: "center" as const,
	boxShadow: `0 2px 5px ${purpleColor}50`,
};

const instructionText = {
	fontSize: "14px",
	color: "#666",
	marginTop: "0",
	marginBottom: "30px",
	fontStyle: "italic",
	textAlign: "center" as const,
};

const divider = {
	borderColor: "#f0f0f0",
	margin: "10px 0",
};

const footer = {
	background: `linear-gradient(135deg, ${purpleLightColor}20 0%, ${purpleColor}20 100%)`,
	textAlign: "center" as const,
	padding: "30px",
	borderBottomLeftRadius: "12px",
	borderBottomRightRadius: "12px",
};

const footerText = {
	fontSize: "13px",
	color: "#666",
	lineHeight: "22px",
	margin: "5px 0",
};

const link = {
	color: purpleColor,
	textDecoration: "none",
	fontWeight: "500",
};

const socialIconColumn = {
	textAlign: "center" as const,
	width: "33.33%",
};

const socialIcon = {
	margin: "0 auto",
};
