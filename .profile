set -o allexport; source /<path_to_the_directory_of_.env_file>/.env; set +o allexport

The above configuration will loop through all the environment variables you added to the .env file and set them on the Linux machine.

To save the configuration, press esc, then type :wq and press enter as you did previously.

To confirm that the configuration took effect and your environment variables have been set, log out of your current shell session, log back in and then run:

$ printenv 

After running the above command, you should see your environment variables, as shown in the image below.
Conclusion

This tutorial explained environment variables and taught how to set them on a Linux machine. There is more to learn about environment variables in Linux. To learn more, check out the following resources:

    Environment Variables in Linux/Unix
        How to Set and List Environment Variables in Linux
	    List of Environment Variables in Linux/Unix

	    Linux
	    Divine Odazie
	    Divine Odazie
	    Twitter

	    Founder of EverythingDevOps. Consistency is key. That’s what Divine believes in, and he says he benefits from that fact, so he tries to be consistent in his doings. Divine is a Cloud Native DevRel.
	    The Practical DevOps Newsletter

	    Your weekly source of expert tips, real-world scenarios, and streamlined workflows!
	    Your email address
	    You might also like
	    How to Set Up a Linux OS (Ubuntu) on Windows using VirtualBox and Vagrant

	    Ubuntu is a popular Linux distribution that offers users a wide range of features and applications. Ubuntu is a great choice for those new to Linux who want to explore its capabilities. However, it can be difficult to set up and configure on a Windows desktop. Fortunately, there is a
	    Angel Ifechukwu Onyebuchi
	    Angel Ifechukwu Onyebuchi
	    13 Jan 2023
	    Linux
	    How to Schedule Future Processes in Linux Using at

	    Assuming you need to perform a task on a specific day sometime in the future. However, you know you will be away from the machine (computer) on that day. How will you perform the task? You can use the at terminal utility program to execute any non-interactive command at a
	    Divine Odazie
	    Divine Odazie
	    20 May 2022
	    Linux
	    The Practical DevOps Newsletter

	    Your weekly source of expert tips, real-world scenarios, and streamlined workflows!
	    Your email address

	        Twitter
		    LinkedIn

		        RSS

			Featured Posts
			A Brief History of DevOps and Its Impact on Software Development
			26 Feb 2023
			Linux background and foreground process management

