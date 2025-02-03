const output = document.getElementById('output');
const input = document.getElementById('command-input');

const commands = {
    help: {
        description: 'List all available commands',
        execute: () => `
Available commands:
- help     : Show this help message
- about    : Learn about me
- skills   : View my technical skills
- projects : See my projects
- contact  : Get my contact information
- clear    : Clear the terminal
`
    },
    about: {
        description: 'About me',
        execute: () => `
Hi, I'm Win Paing! 👋
System Engineer with over 4 years of experience in managing Linux systems 
and cloud environments. Passionate about cloud infrastructure and automation.

Current Position: Cloud Engineer
Location: Thailand
`
    },
    skills: {
        description: 'My technical skills',
        execute: () => `
Technical Skills:
• Linux System Administration
• GitLab, GitHub
• Docker, Podman, Kubernetes
• Ansible, Terraform
• Python, Bash
• AWS, GCP, Azure
• MySQL, Oracle Database 12c
• Middleware (JBoss, Tomcat)
• KVM, Vagrant
• Backup and Restore
`
    },
    projects: {
        description: 'My projects',
        execute: () => `
Recent Projects:
1. Cloud Infrastructure Automation
   - Implemented CI/CD pipelines
   - Automated deployment processes
   
2. Monitoring System Setup
   - Set up comprehensive monitoring
   - Implemented alerting systems

3. Database Management
   - Managed Oracle database operations
   - Implemented backup strategies
`
    },
    contact: {
        description: 'Contact information',
        execute: () => `
📧 Email: sysadm.winpaingsoe@gmail.com
📱 Phone: +66 619 623 368
🔗 LinkedIn: https://www.linkedin.com/in/win-paing-soe-b53183100/
📍 Location: Suk Sawat 78, Samut Prakan 10130, Thailand
`
    },
    clear: {
        description: 'Clear terminal',
        execute: () => {
            output.innerHTML = '';
            return '';
        }
    }
};

function addOutput(text, isCommand = false) {
    const line = document.createElement('div');
    line.className = 'output-line';
    if (isCommand) {
        line.innerHTML = `<span class="prompt">visitor@winpaing:~$</span> ${text}`;
    } else {
        line.innerHTML = text;
    }
    output.appendChild(line);
    line.scrollIntoView();
}

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = this.value.trim().toLowerCase();
        addOutput(command, true);

        if (commands[command]) {
            const result = commands[command].execute();
            if (result) addOutput(result);
        } else if (command !== '') {
            addOutput(`Command not found: ${command}. Type 'help' for available commands.`);
        }

        this.value = '';
    }
});

// Initial welcome message
addOutput(`
Welcome to Win Paing's Terminal Portfolio! 🚀
Type 'help' to see available commands.
------------------------------------------------
`);