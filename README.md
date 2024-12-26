<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arham Salman's Portfolio</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333;
        }
        header {
            background-color: #BF5700;
            color: white;
            padding: 20px 0;
            text-align: center;
            font-size: 1.5em;
            font-weight: bold;
        }
        main {
            display: flex;
            flex-wrap: wrap;
            margin: 20px;
            gap: 20px;
        }
        .left-column, .right-column {
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .left-column {
            flex: 1;
            max-width: 300px;
        }
        .right-column {
            flex: 2;
            min-width: 500px;
        }
        h2 {
            color: #BF5700;
            font-size: 1.2em;
            margin-bottom: 10px;
            border-bottom: 2px solid #BF5700;
            padding-bottom: 5px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            margin-bottom: 10px;
        }
        a {
            color: #BF5700;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .profile img {
            width: 100%;
            max-width: 200px;
            height: auto;
            border-radius: 50%;
            margin-bottom: 15px;
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #BF5700;
            color: white;
            margin-top: 20px;
            font-size: 0.9em;
        }
        .contact-list {
            font-size: 1em;
        }
        .icon {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <header>
        Arham Salman's Portfolio
    </header>

    <main>
        <div class="left-column">
            <section class="profile">
                <img src="assets/Screenshot 2024-12-25 165858.png" alt="Arham Salman">
                <p>Hello! I'm Arham Salman, a first year Masters student in Biostatistics & Data Science at UTHealth Houston. My ambitions in Public Health aim to curtail disparities in healthcare treatment and accessibility for low income and marginalized populations.</p>
            </section>
        </div>

        <div class="right-column">
            <section id="education">
                <h2>Education</h2>
                <ul>
                    <li>Master of Science in Biostatistics & Data Science - UTHealth Houston (2024-2026)</li>
                    <li>Bachelor of Science in Public Health - The University of Texas at Austin (2020-2024)</li>
                </ul>
            </section>

            <section id="research">
                <h2>Research</h2>
                <ul>
                    <li>Biostatistics Research Intern - UTMB Summer Insitute of Biostatistics and Data Science (2023)</li>
                    <li>Data Analyst Intern - UT SHIFT </li>
                </ul>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <ul>
                    <li><a href="assets/Big Data Soccer Team Analysis Project" download>Big Data Soccer Team Analysis</a></li>
                    <li><a href="assets/nhanes.Rmd" download>Exploring the Link Between Household Income And Cardiovascular Disease</a></li>
                </ul>
            </section>

            <section id="links">
                <h2>Links</h2>
                <ul>
                    <li><a href="https://github.com/Arham4124" target="_blank">
                        <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" class="icon" alt="GitHub Logo">GitHub Profile</a></li>
                    <li><a href="https://www.linkedin.com/in/arham-salman12d" target="_blank">
                        <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" class="icon" alt="LinkedIn Logo">LinkedIn</a></li>
                </ul>
            </section>

            <section id="contact">
                <h2>Contact Information</h2>
                <ul class="contact-list">
                    <li>Email: <a href="mailto:arham.salman@uth.tmc.edu">arham.salman@uth.tmc.edu</a></li>
                    <li>Phone: 281-650-5936</li>
                    <li><a href="assets/Resume.pdf" target="_blank">View My Resume</a></li>
                </ul>
            </section>
        </div>
    </main>

    <footer>
        &copy; 2024 Arham Salman. All rights reserved.
    </footer>
</body>
</html>
